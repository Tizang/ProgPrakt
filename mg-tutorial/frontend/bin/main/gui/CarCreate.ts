/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Car } from 'carrental/Car';
import { CarrentalManager } from 'carrental/CarrentalManager';
import { RentableStatus } from 'carrental/RentableStatus';
import { CarCreateTOP } from './CarCreateTOP';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { CarCreateComponent, config } from 'gui/CarCreateComponent';
import { OnDestroy } from '@angular/core';
import { GemListUtil } from '@umlp/commonj2ts';
import { GemIdentifiable } from '@umlp/commonj2ts';

@Component({
    standalone: true,
    imports: [...config.imports],
    selector: config.selector,
    templateUrl: config.templateUrl,
    styles: config.styles,
    styleUrls: [...config.styleUrls]
})
export class CarCreate extends CarCreateComponent implements OnDestroy {
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        ComponentObserverManager.removeObservers("gui.CarCreate" + this.uniqueIdentifier);
    }

    /**
     * 
     * @param {Car} car
     * @param {String} __regObsToDomainObj
     * @param {String} __regObsToStateVar
     * @return {*}
     */
    public async createAndNavigate(car: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        __regObsToDomainObj(car);
        return async ($) => {
            await __regObsToDomainObj(__regObsToDomainObj(__regObsToDomainObj(__regObsToDomainObj(__regObsToDomainObj(__regObsToDomainObj(__regObsToDomainObj((await CarrentalManager.carBuilder())).make(car.getMake())).model(car.getModel())).costPerDay(car.getCostPerDay())).mileage(0.0)).name(car.getName())).rentableStatus(RentableStatus.AVAILABLE)).build();
            this._router.navigate(["gui", "CarOverview"]);
        };
    }
}
CarCreate["__class"] = "gui.CarCreate";



