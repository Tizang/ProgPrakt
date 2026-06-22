
import { Route } from "@angular/router";
  import { Start } from "./StartComponent";
  import { CustomerOverview } from "gui/CustomerOverview";
  import { CarCreate } from "gui/CarCreate";
  import { CarOverview } from "gui/CarOverview";
  import { CarForm } from "./CarFormComponent";
  import { SimpleCarList } from "./SimpleCarListComponent";
  import { CarUpdate } from "./CarUpdateComponent";


export const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "Start"
  },
  {
    path: "Start",
    component: Start
  },
  {
    path: "CustomerOverview",
    component: CustomerOverview
  },
  {
    path: "CarCreate",
    component: CarCreate
  },
  {
    path: "CarOverview",
    component: CarOverview
  },
  {
    path: "CarForm/:gui_CarForm_car_RoutingId",
    component: CarForm
  },
  {
    path: "SimpleCarList",
    component: SimpleCarList
  },
  {
    path: "CarUpdate/:gui_CarUpdate_car_RoutingId",
    component: CarUpdate
  },
]
