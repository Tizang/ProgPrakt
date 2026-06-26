import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const API = '/umlp/api';

interface MachineStatus { name: string; state: string; packets: number; energy: number; }

// Layout positions [x, z] on the factory floor, y=0 is ground
const MACHINE_LAYOUT: Record<string, [number, number]> = {
  'SortingLine':     [-4,  2],
  'VacuumGripper1':  [-1,  2],
  'ConveyorBelt':    [ 2,  2],
  'VacuumGripper2':  [ 5,  2],
  'MultiProcessing': [ 5, -1],
  'HighBay':         [ 2, -1],
  'PunchingMachine': [-1, -1],
};

const COLOR_IDLE      = 0x4a90d9;
const COLOR_RUNNING   = 0x27ae60;
const COLOR_OVERHEAT  = 0xe74c3c;

@Component({
  selector: 'app-factory-3d',
  templateUrl: './factory-3d.component.html',
  styleUrls: ['./factory-3d.component.scss']
})
export class Factory3DComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  machines: MachineStatus[] = [];
  hoveredMachine: MachineStatus | null = null;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private animFrameId!: number;
  private pollHandle!: any;

  // Per-machine animated parts
  private machineGroups: Map<string, THREE.Group> = new Map();
  private spinParts:     Map<string, THREE.Object3D> = new Map();
  private beltParts:     Map<string, THREE.Mesh> = new Map();
  private armParts:      Map<string, { arm: THREE.Mesh; dir: number; pos: number }> = new Map();
  private machineMats:   Map<string, THREE.MeshStandardMaterial> = new Map();
  private clock = new THREE.Clock();
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initScene();
    this.buildFactory();
    this.animate();
    this.pollHandle = setInterval(() => this.fetchMachines(), 800);
    this.fetchMachines();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animFrameId);
    clearInterval(this.pollHandle);
    this.renderer.dispose();
  }

  // ── Scene setup ──────────────────────────────────────────────────────────

  private initScene() {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.onResize();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a2332);
    this.scene.fog = new THREE.FogExp2(0x1a2332, 0.04);

    this.camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    this.camera.position.set(0, 9, 12);
    this.camera.lookAt(0, 0, 0);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI / 2.1;
    this.controls.minDistance = 4;
    this.controls.maxDistance = 25;

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(6, 12, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    this.scene.add(sun);

    const fill = new THREE.DirectionalLight(0x4488ff, 0.3);
    fill.position.set(-6, 4, -4);
    this.scene.add(fill);

    // Floor
    const floorGeo = new THREE.PlaneGeometry(20, 14);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.9, metalness: 0.1 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Grid
    const grid = new THREE.GridHelper(20, 20, 0x3d5166, 0x3d5166);
    grid.position.y = 0.001;
    this.scene.add(grid);

    window.addEventListener('resize', () => this.onResize());
    this.canvasRef.nativeElement.addEventListener('mousemove', e => this.onMouseMove(e));
  }

  // ── Factory machines ─────────────────────────────────────────────────────

  private buildFactory() {
    this.buildMachine('SortingLine',     this.makeSortingLine.bind(this));
    this.buildMachine('VacuumGripper1',  this.makeVacuumGripper.bind(this));
    this.buildMachine('ConveyorBelt',    this.makeConveyorBelt.bind(this));
    this.buildMachine('VacuumGripper2',  this.makeVacuumGripper.bind(this));
    this.buildMachine('MultiProcessing', this.makeMultiProcessing.bind(this));
    this.buildMachine('HighBay',         this.makeHighBay.bind(this));
  }

  private buildMachine(name: string, builder: (g: THREE.Group, mat: THREE.MeshStandardMaterial) => void) {
    const pos = MACHINE_LAYOUT[name];
    if (!pos) return;

    const mat = new THREE.MeshStandardMaterial({ color: COLOR_IDLE, roughness: 0.5, metalness: 0.4 });
    this.machineMats.set(name, mat);

    const group = new THREE.Group();
    group.position.set(pos[0], 0, pos[1]);
    group.userData['machineName'] = name;
    builder(group, mat);

    this.scene.add(group);
    this.machineGroups.set(name, group);
  }

  private box(w: number, h: number, d: number, mat: THREE.Material, castShadow = true): THREE.Mesh {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    return mesh;
  }

  private makeSortingLine(g: THREE.Group, mat: THREE.MeshStandardMaterial) {
    // Base box
    const base = this.box(1.4, 0.5, 1.0, mat);
    base.position.y = 0.25;
    g.add(base);
    // Rotating carousel disc on top
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.4, 0.1, 24),
      new THREE.MeshStandardMaterial({ color: 0xf39c12, roughness: 0.4, metalness: 0.6 })
    );
    disc.position.y = 0.55;
    disc.castShadow = true;
    g.add(disc);
    this.spinParts.set('SortingLine', disc);
    // Label
    this.addLabel(g, 'Sorting');
  }

  private makeVacuumGripper(g: THREE.Group, mat: THREE.MeshStandardMaterial) {
    // Column
    const col = this.box(0.2, 1.2, 0.2, mat);
    col.position.y = 0.6;
    g.add(col);
    // Horizontal arm
    const arm = this.box(0.8, 0.1, 0.1, new THREE.MeshStandardMaterial({ color: 0xe67e22, roughness: 0.4, metalness: 0.5 }));
    arm.position.set(0.4, 0.9, 0);
    arm.castShadow = true;
    g.add(arm);
    // Suction cup at end
    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.12, 0.15, 12),
      new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.8 })
    );
    cup.position.set(0.85, 0.82, 0);
    cup.castShadow = true;
    g.add(cup);
    this.armParts.set(g.userData['machineName'], { arm: cup, dir: 1, pos: 0 });
    this.addLabel(g, 'Gripper');
  }

  private makeConveyorBelt(g: THREE.Group, mat: THREE.MeshStandardMaterial) {
    // Belt body
    const belt = this.box(1.8, 0.3, 0.7, mat);
    belt.position.y = 0.15;
    g.add(belt);
    // Rollers
    for (const x of [-0.7, 0, 0.7]) {
      const roller = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 0.75, 12),
        new THREE.MeshStandardMaterial({ color: 0x7f8c8d, metalness: 0.8 })
      );
      roller.rotation.x = Math.PI / 2;
      roller.position.set(x, 0.3, 0);
      roller.castShadow = true;
      g.add(roller);
      if (x === 0) this.spinParts.set('ConveyorBelt', roller);
    }
    this.addLabel(g, 'Conveyor');
  }

  private makeMultiProcessing(g: THREE.Group, mat: THREE.MeshStandardMaterial) {
    const base = this.box(1.2, 0.6, 1.2, mat);
    base.position.y = 0.3;
    g.add(base);
    // Spindle
    const spindleMat = new THREE.MeshStandardMaterial({ color: 0x9b59b6, metalness: 0.7, roughness: 0.3 });
    const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6, 16), spindleMat);
    spindle.position.y = 0.9;
    spindle.castShadow = true;
    g.add(spindle);
    // Tool tip
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.2, 12), spindleMat);
    tip.position.y = 1.3;
    tip.castShadow = true;
    g.add(tip);
    this.spinParts.set('MultiProcessing', spindle);
    this.addLabel(g, 'Multi-P');
  }

  private makeHighBay(g: THREE.Group, mat: THREE.MeshStandardMaterial) {
    // Rack frame
    for (const x of [-0.5, 0.5]) {
      const pole = this.box(0.08, 2.0, 0.08, mat);
      pole.position.set(x, 1.0, 0);
      g.add(pole);
    }
    for (const y of [0.4, 0.9, 1.4]) {
      const shelf = this.box(1.0, 0.06, 0.6, new THREE.MeshStandardMaterial({ color: 0x7f8c8d }));
      shelf.position.y = y;
      g.add(shelf);
    }
    // Moving crane
    const crane = this.box(0.9, 0.12, 0.12, new THREE.MeshStandardMaterial({ color: 0xe74c3c, metalness: 0.6 }));
    crane.position.set(0, 0.5, 0);
    crane.castShadow = true;
    g.add(crane);
    this.armParts.set('HighBay', { arm: crane, dir: 1, pos: 0.5 });
    this.addLabel(g, 'HighBay');
  }

  private addLabel(g: THREE.Group, text: string) {
    // Simple colored marker for now (canvas labels require extra setup)
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 })
    );
    marker.position.set(0, 2.2, 0);
    g.add(marker);
  }

  // ── Animation loop ────────────────────────────────────────────────────────

  private animate() {
    this.animFrameId = requestAnimationFrame(() => this.animate());
    const delta = this.clock.getDelta();
    this.controls.update();
    this.updateAnimations(delta);
    this.renderer.render(this.scene, this.camera);
  }

  private updateAnimations(delta: number) {
    const stateMap = new Map(this.machines.map(m => [m.name, m.state]));

    this.machineGroups.forEach((group, name) => {
      const state   = stateMap.get(name) ?? 'IDLE';
      const running = state === 'RUNNING';
      const mat     = this.machineMats.get(name);
      if (mat) {
        const target = state === 'RUNNING' ? COLOR_RUNNING : state === 'OVERHEATED' ? COLOR_OVERHEAT : COLOR_IDLE;
        mat.color.lerp(new THREE.Color(target), delta * 3);
        mat.emissive.set(running ? 0x0a3d20 : 0x000000);
      }
    });

    // Spinning parts (disc, spindle, rollers)
    ['SortingLine', 'MultiProcessing', 'ConveyorBelt'].forEach(name => {
      const part  = this.spinParts.get(name);
      const state = stateMap.get(name) ?? 'IDLE';
      if (!part || state !== 'RUNNING') return;
      const speed = name === 'MultiProcessing' ? 6 : name === 'SortingLine' ? 2 : 4;
      part.rotation.y += delta * speed;
    });

    // Arm / crane movement (VacuumGrippers, HighBay)
    ['VacuumGripper1', 'VacuumGripper2', 'HighBay'].forEach(name => {
      const info  = this.armParts.get(name);
      const state = stateMap.get(name) ?? 'IDLE';
      if (!info || state !== 'RUNNING') return;
      const isGripper = name.startsWith('Vacuum');
      info.pos  += delta * info.dir * (isGripper ? 0.4 : 0.6);
      const min  = isGripper ? 0.7 : 0.35;
      const max  = isGripper ? 1.0 : 1.45;
      if (info.pos > max) { info.pos = max; info.dir = -1; }
      if (info.pos < min) { info.pos = min; info.dir =  1; }
      if (isGripper) info.arm.position.y = info.pos;
      else           info.arm.position.y = info.pos;
    });
  }

  // ── Data ──────────────────────────────────────────────────────────────────

  private fetchMachines() {
    this.http.get<MachineStatus[]>(`${API}/simulation/machines`)
      .subscribe(m => this.machines = m);
  }

  // ── Mouse hover ───────────────────────────────────────────────────────────

  private onMouseMove(event: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x =  ((event.clientX - rect.left) / rect.width)  * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top)  / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);
    if (hits.length > 0) {
      let obj: THREE.Object3D | null = hits[0].object;
      while (obj && !obj.userData['machineName']) obj = obj.parent;
      const name = obj?.userData['machineName'];
      this.hoveredMachine = name ? (this.machines.find(m => m.name === name) ?? null) : null;
    } else {
      this.hoveredMachine = null;
    }
  }

  private onResize() {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    this.renderer.setSize(w, h, false);
    if (this.camera) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
  }
}
