import { Route } from "@angular/router";
import { routes as routesTOP } from "AppGemRoutingTOP";
import { ReplayControlComponent } from 'replay-control/replay-control.component';
import { DashboardComponent } from 'dashboard/dashboard.component';
import { Factory3DComponent } from 'factory-3d/factory-3d.component';

export const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "factory3d",
    component: Factory3DComponent
  },
  {
    path: "replay",
    component: ReplayControlComponent
  },
  ...routesTOP
]
