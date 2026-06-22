/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Car } from 'carrental/Car';
import { CarrentalManager } from 'carrental/CarrentalManager';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export class CarUpdate {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = CarUpdate.nextId++;

    private static nextHash: number = 0;
    protected hashes: ManyKeysMap<any, number> = new ManyKeysMap();
    protected computeHash(objs: any[]): number {
        let key = [];
        for (const obj of objs) {
            if (typeof obj.getGemId === 'function') {
                key.push(obj.getGemId());
            } else {
                key.push(obj);
            }
        }
        if (this.hashes.has(key)) {
            return this.hashes.get(key);
        } else {
            let hash: number = CarUpdate.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.CarUpdate" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.CarUpdate" + this.uniqueIdentifier);
        }
    }

    public ngOnDestroy(): void {
        ComponentObserverManager.removeObservers("gui.CarUpdate" + this.uniqueIdentifier);
    }


    protected _router: Router;

    _car: Car;

    public _carSetExternally: boolean;

    public gui_CarUpdate_car_RoutingId: number;

    public constructor() {
        if (this._car === undefined) { this._car = null; }
        this._carSetExternally = false;
        if (this.gui_CarUpdate_car_RoutingId === undefined) { this.gui_CarUpdate_car_RoutingId = null; }
    }

    public getCar(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Car {
        return this._car;
    }

    private getCarForAngular__CachedResult: Car = undefined;
    public getCarForAngular__ChangeDetection(): Car {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCarForAngular__CachedResult === undefined) {
            this.getCarForAngular__CachedResult = null;
            this.getCarForAngular__update();
        }
        return this.getCarForAngular__CachedResult;
    }

    public getCarForAngular__update(): void {
        
        Promise.resolve(this.getCarForAngular(
            this.createDomainObserverRegisterFunction('getCarForAngular__update' + this.computeHash([]), () => this.getCarForAngular__update()),
            this.createStateVarObserverRegisterFunction('getCarForAngular__update' + this.computeHash([]), () => this.getCarForAngular__update())
        )).then(__v => this.getCarForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getCarForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Car {
        return __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car"));
    }

    public setCar(val: Car) {
                this._carSetExternally = true;
        this._car = val;

        ComponentObserverManager.callStateVariableObserver("_car", "gui.CarUpdate" + this.uniqueIdentifier);
        this.getCarForAngular__update();
    }

    public getCarForm0Car(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Car {
        if (false){
            return null;
        }
        const val_$: Car = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car"));
        return val_$;
    }

    private getCarForm0CarForAngular__CachedResult: Car = undefined;
    public getCarForm0CarForAngular__ChangeDetection(): Car {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCarForm0CarForAngular__CachedResult === undefined) {
            this.getCarForm0CarForAngular__CachedResult = null;
            this.getCarForm0CarForAngular__update();
        }
        return this.getCarForm0CarForAngular__CachedResult;
    }

    public getCarForm0CarForAngular__update(): void {
        
        Promise.resolve(this.getCarForm0CarForAngular(
            this.createDomainObserverRegisterFunction('getCarForm0CarForAngular__update' + this.computeHash([]), () => this.getCarForm0CarForAngular__update()),
            this.createStateVarObserverRegisterFunction('getCarForm0CarForAngular__update' + this.computeHash([]), () => this.getCarForm0CarForAngular__update())
        )).then(__v => this.getCarForm0CarForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getCarForm0CarForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Car {
        return __regObsToDomainObj(this.getCarForm0Car(__regObsToDomainObj, __regObsToStateVar));
    }

    async initCar() {
        if (!this._carSetExternally){
            if (this.gui_CarUpdate_car_RoutingId != null){
                this._car = await CarrentalManager.getCarSure(this.gui_CarUpdate_car_RoutingId);
            } else {
                this._car = await CarrentalManager.carBuilder();
            }
        }
    }

    protected allVarsInited: boolean = false;
    public async init() {
        await this.initCar();
    }

    public destroy() {
    }
}
CarUpdate["__class"] = "gui.CarUpdate";



