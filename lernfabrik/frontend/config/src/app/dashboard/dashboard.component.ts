import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = '/umlp/api';

interface MachineStatus {
  name: string;
  state: string;
  energy: number;
  packets: number;
}

interface SimStatus {
  running: boolean;
  speed: number;
}

interface ReplayStatus {
  running: boolean;
  file: string;
  progress: number;
  eventsTotal: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  simStatus: SimStatus = { running: false, speed: 1 };
  replayStatus: ReplayStatus = { running: false, file: '', progress: 0, eventsTotal: 0 };
  machines: MachineStatus[] = [];

  simSpeed = 5;
  packageInterval = 0.5;

  private pollHandle: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refresh();
    this.pollHandle = setInterval(() => this.refresh(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.pollHandle);
  }

  startSim() {
    this.http.post<any>(
      `${API}/simulation/start?speed=${this.simSpeed}&packageIntervalMinutes=${this.packageInterval}`, {}
    ).subscribe(() => this.refresh());
  }

  stopSim() {
    this.http.post<any>(`${API}/simulation/stop`, {}).subscribe(() => this.refresh());
  }

  stopReplay() {
    this.http.post<any>(`${API}/replay/stop`, {}).subscribe(() => this.refresh());
  }

  private refresh() {
    this.http.get<SimStatus>(`${API}/simulation/status`).subscribe(s => this.simStatus = s);
    this.http.get<ReplayStatus>(`${API}/replay/status`).subscribe(s => this.replayStatus = s);
    this.http.get<MachineStatus[]>(`${API}/simulation/machines`).subscribe(m => this.machines = m);
  }

  get runningCount()    { return this.machines.filter(m => m.state === 'RUNNING').length; }
  get idleCount()       { return this.machines.filter(m => m.state === 'IDLE').length; }
  get overheatedCount() { return this.machines.filter(m => m.state === 'OVERHEATED').length; }
  get totalPackets()    { return this.machines.reduce((s, m) => s + m.packets, 0); }
  get totalEnergy()     { return this.machines.reduce((s, m) => s + m.energy, 0); }

  get bottleneck(): MachineStatus | null {
    if (!this.machines.length) return null;
    return this.machines.reduce((a, b) => b.packets > a.packets ? b : a);
  }

  stateColor(state: string): string {
    if (state === 'RUNNING')    return '#27ae60';
    if (state === 'OVERHEATED') return '#e74c3c';
    return '#95a5a6';
  }
}
