/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { GemListUtil } from '@umlp/commonj2ts';

import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export class AppRouter {
    public static navigateToGuiStart(router:Router){
        router.navigate(["gui/Start"]);
    }

    public static navigateToGuiCustomerOverview(router:Router){
        router.navigate(["gui/CustomerOverview"]);
    }

    public static navigateToGuiCarCreate(router:Router){
        router.navigate(["gui/CarCreate"]);
    }

    public static navigateToGuiCarOverview(router:Router){
        router.navigate(["gui/CarOverview"]);
    }

    public static navigateToGuiCarForm(val_0: number, router:Router){
        router.navigate(["gui/CarForm/" + val_0]);
    }

    public static navigateToGuiSimpleCarList(router:Router){
        router.navigate(["gui/SimpleCarList"]);
    }

    public static navigateToGuiCarUpdate(val_0: number, router:Router){
        router.navigate(["gui/CarUpdate/" + val_0]);
    }
}
AppRouter["__class"] = "app.AppRouter";



