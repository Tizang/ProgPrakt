/* (c) https://github.com/MontiCore/monticore */

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReplayControlComponent } from 'replay-control/replay-control.component';
import { DashboardComponent } from 'dashboard/dashboard.component';
import { Factory3DComponent } from 'factory-3d/factory-3d.component';

export const config = {
  declarations: [ReplayControlComponent, DashboardComponent, Factory3DComponent],
  exports:      [ReplayControlComponent, DashboardComponent, Factory3DComponent],
  imports:      [HttpClientModule, FormsModule],
  providers:    []
}
