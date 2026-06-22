import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = '/umlp/api';

interface MachineStatus {
  name: string;
  state: string;
  energy: number;
  packets: number;
  heatLevel: number;
}

interface ReplayStatus {
  running: boolean;
  file: string;
  progress: number;
  eventsDone: number;
  eventsTotal: number;
  speed: number;
}

@Component({
  selector: 'app-replay-control',
  templateUrl: './replay-control.component.html',
  styleUrls: ['./replay-control.component.scss']
})
export class ReplayControlComponent implements OnInit, OnDestroy {
  selectedFile = 'simple_process';
  speed = 10;

  status: ReplayStatus = {
    running: false, file: '', progress: 0,
    eventsDone: 0, eventsTotal: 0, speed: 1
  };
  machines: MachineStatus[] = [];

  private pollHandle: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refresh();
    this.pollHandle = setInterval(() => this.refresh(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.pollHandle);
  }

  startReplay() {
    this.http.post<any>(
      `${API}/replay/start?file=${this.selectedFile}&speed=${this.speed}`, {}
    ).subscribe(() => this.refresh());
  }

  stopReplay() {
    this.http.post<any>(`${API}/replay/stop`, {}).subscribe(() => this.refresh());
  }

  private refresh() {
    this.http.get<ReplayStatus>(`${API}/replay/status`)
      .subscribe(s => this.status = s);
    this.http.get<MachineStatus[]>(`${API}/simulation/machines`)
      .subscribe(m => this.machines = m);
  }

  stateColor(state: string): string {
    if (state === 'RUNNING')    return '#27ae60';
    if (state === 'OVERHEATED') return '#e74c3c';
    if (state === 'FAULT')      return '#c0392b';
    return '#95a5a6';
  }

  energyBar(m: MachineStatus): number {
    if (!this.machines.length) return 0;
    const max = Math.max(...this.machines.map(x => x.energy));
    return max > 0 ? (m.energy / max) * 100 : 0;
  }
}
