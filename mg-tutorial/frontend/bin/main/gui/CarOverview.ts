/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Car } from 'carrental/Car';
import { RentableStatus } from 'carrental/RentableStatus';
import { RentCar } from 'carrental/commands/RentCar';
import { CommandManager } from '@umlp/commonj2ts';
import { CommandResult } from '@umlp/commonj2ts';
import { StatusResult } from '@umlp/commonj2ts';
import { Component } from '@angular/core';
import { CarOverviewTOP } from './CarOverviewTOP';
import { StringHelper } from '@umlp/commonj2ts';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { CarOverviewComponent, config } from 'gui/CarOverviewComponent';
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
export class CarOverview extends CarOverviewComponent implements OnDestroy {
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        ComponentObserverManager.removeObservers("gui.CarOverview" + this.uniqueIdentifier);
    }

    /**
     * 
     * @param {String} __regObsToDomainObj
     * @param {String} __regObsToStateVar
     * @return {string}
     */
    public async getAvailableCarsTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if ((await GemListUtil.toArraySync(__regObsToStateVar(await this.getCars(__regObsToDomainObj, __regObsToStateVar), "_cars"))) == null){
            return "";
        }
        let i: number = 0;
        for (let c of ((await GemListUtil.toArraySync(__regObsToStateVar(await this.getCars(__regObsToDomainObj, __regObsToStateVar), "_cars"))))) {
            __regObsToDomainObj(c);
            {
                if (c.getRentableStatus() === RentableStatus.AVAILABLE){
                    i++;
                }
            }
        }
        return i + " available cars";
    }

    /**
     * 
     * @param {Car} car
     * @param {String} __regObsToDomainObj
     * @param {String} __regObsToStateVar
     * @return {*}
     */
    public async rentCar(car: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        __regObsToDomainObj(car);
        return async (x) => {
            await CommandManager.executeCommand<any>(new RentCar(car.getGemId()));
        };
    }

    /**
     * 
     * @param {Car} car
     * @param {String} __regObsToDomainObj
     * @param {String} __regObsToStateVar
     * @return {*}
     */
    public updateCar(car: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        __regObsToDomainObj(car);
        return ($) => {
            this._router.navigate(["gui", "CarUpdate", /* valueOf */String(car.getGemId()).toString()]);
        };
    }

    constructor() {
        super();
    }
}
CarOverview["__class"] = "gui.CarOverview";
CarOverview["__interfaces"] = ["carrental.CarrentalObserver"];




