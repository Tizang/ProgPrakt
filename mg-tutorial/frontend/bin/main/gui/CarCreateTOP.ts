/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Car } from 'carrental/Car';
import { CarrentalManager } from 'carrental/CarrentalManager';
import { StringHelper } from '@umlp/commonj2ts';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export abstract class CarCreateTOP {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = CarCreateTOP.nextId++;

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
            let hash: number = CarCreateTOP.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.CarCreate" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.CarCreate" + this.uniqueIdentifier);
        }
    }


    protected _router: Router;

    _car: Car;

    public _carSetExternally: boolean;

    public gui_CarCreate_car_RoutingId: number;

    public constructor() {
        if (this._car === undefined) { this._car = null; }
        this._carSetExternally = false;
        if (this.gui_CarCreate_car_RoutingId === undefined) { this.gui_CarCreate_car_RoutingId = null; }
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

        ComponentObserverManager.callStateVariableObserver("_car", "gui.CarCreate" + this.uniqueIdentifier);
        this.getCarForAngular__update();
    }

    public async createAndNavigate(val_$_$0: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        __regObsToDomainObj(val_$_$0);
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    public getGemButton1Label(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Create";
        return val_$;
    }

    private getGemButton1LabelForAngular__CachedResult: string = undefined;
    public getGemButton1LabelForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton1LabelForAngular__CachedResult === undefined) {
            this.getGemButton1LabelForAngular__CachedResult = null;
            this.getGemButton1LabelForAngular__update();
        }
        return this.getGemButton1LabelForAngular__CachedResult;
    }

    public getGemButton1LabelForAngular__update(): void {
        
        Promise.resolve(this.getGemButton1LabelForAngular(
            this.createDomainObserverRegisterFunction('getGemButton1LabelForAngular__update' + this.computeHash([]), () => this.getGemButton1LabelForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemButton1LabelForAngular__update' + this.computeHash([]), () => this.getGemButton1LabelForAngular__update())
        )).then(__v => this.getGemButton1LabelForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemButton1LabelForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemButton1Label(__regObsToDomainObj, __regObsToStateVar);
    }

    public async gemButton1LeftClick(event_$: void) {
        if (await this.createAndNavigate(this.getCar()) != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))((await this.createAndNavigate(this.getCar())));
        }
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
            if (this.gui_CarCreate_car_RoutingId != null){
                this._car = await CarrentalManager.getCarSure(this.gui_CarCreate_car_RoutingId);
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
CarCreateTOP["__class"] = "gui.CarCreateTOP";



