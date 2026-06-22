/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Car } from 'carrental/Car';
import { CarrentalManager } from 'carrental/CarrentalManager';
import { EmptyCarrentalObserver } from 'carrental/EmptyCarrentalObserver';
import { RentableStatus } from 'carrental/RentableStatus';
import { Car_subscribeManagerEvents } from 'carrental/commands/Car_subscribeManagerEvents';
import { StringHelper } from '@umlp/commonj2ts';
import { CommandManager } from '@umlp/commonj2ts';
import { NotificationScope } from '@umlp/commonj2ts';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export abstract class CarOverviewTOP extends EmptyCarrentalObserver {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = CarOverviewTOP.nextId++;

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
            let hash: number = CarOverviewTOP.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.CarOverview" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.CarOverview" + this.uniqueIdentifier);
        }
    }


    protected _router: Router;

    _cars: Array<Car>;

    public _carsSetExternally: boolean;

    public constructor() {
        super();
        if (this._cars === undefined) { this._cars = null; }
        this._carsSetExternally = false;
    }

    public getCars(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Array<Car> {
        return this._cars;
    }

    private getCarsForAngular__CachedResult: Array<Car> = undefined;
    public getCarsForAngular__ChangeDetection(): Array<Car> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCarsForAngular__CachedResult === undefined) {
            this.getCarsForAngular__CachedResult = null;
            this.getCarsForAngular__update();
        }
        return this.getCarsForAngular__CachedResult;
    }

    public getCarsForAngular__update(): void {
        
        Promise.resolve(this.getCarsForAngular(
            this.createDomainObserverRegisterFunction('getCarsForAngular__update' + this.computeHash([]), () => this.getCarsForAngular__update()),
            this.createStateVarObserverRegisterFunction('getCarsForAngular__update' + this.computeHash([]), () => this.getCarsForAngular__update())
        )).then(__v => this.getCarsForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ async getCarsForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Car>> {
        return GemListUtil.toArraySync<any>((await GemListUtil.toArraySync(__regObsToStateVar((await this.getCars(__regObsToDomainObj, __regObsToStateVar)), "_cars"))));
    }

    public setCars(val: Array<Car>) {
                this._carsSetExternally = true;
        this._cars = val;

        ComponentObserverManager.callStateVariableObserver("_cars", "gui.CarOverview" + this.uniqueIdentifier);
        this.getCarsForAngular__update();
    }

    async removeCars(gemId_$: number) {
        for(let i: number = /* size */(<number>(await GemListUtil.toArraySync((await this.getCars()))).length) - 1; i >= 0; --i) {{
            if (/* get */(await GemListUtil.toArraySync((await this.getCars())))[i].getGemId() === gemId_$){
                /* remove */(await GemListUtil.toArraySync((await this.getCars()))).splice(i, 1)[0];
            }
        };}
    }

    async addCars(val_$: Car) {
        /* add */(await GemListUtil.toArraySync((await this.getCars()))).splice(/* size */(<number>(await GemListUtil.toArraySync((await this.getCars()))).length), 0, val_$);
    }

    public getScope(): NotificationScope {
        return NotificationScope.LOCAL;
    }

    public async getAvailableCarsTitle(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return null;
    }

    public async getGemText2Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        if (false){
            return null;
        }
        const val_$: string = await this.getAvailableCarsTitle(__regObsToDomainObj, __regObsToStateVar);
        return val_$;
    }

    private getGemText2ValueForAngular__CachedResult: string = undefined;
    public getGemText2ValueForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText2ValueForAngular__CachedResult === undefined) {
            this.getGemText2ValueForAngular__CachedResult = null;
            this.getGemText2ValueForAngular__update();
        }
        return this.getGemText2ValueForAngular__CachedResult;
    }

    public getGemText2ValueForAngular__update(): void {
        
        Promise.resolve(this.getGemText2ValueForAngular(
            this.createDomainObserverRegisterFunction('getGemText2ValueForAngular__update' + this.computeHash([]), () => this.getGemText2ValueForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemText2ValueForAngular__update' + this.computeHash([]), () => this.getGemText2ValueForAngular__update())
        )).then(__v => this.getGemText2ValueForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ async getGemText2ValueForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<string> {
        return await this.getGemText2Value(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText2Size(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2rem";
        return val_$;
    }

    private getGemText2SizeForAngular__CachedResult: string = undefined;
    public getGemText2SizeForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText2SizeForAngular__CachedResult === undefined) {
            this.getGemText2SizeForAngular__CachedResult = null;
            this.getGemText2SizeForAngular__update();
        }
        return this.getGemText2SizeForAngular__CachedResult;
    }

    public getGemText2SizeForAngular__update(): void {
        
        Promise.resolve(this.getGemText2SizeForAngular(
            this.createDomainObserverRegisterFunction('getGemText2SizeForAngular__update' + this.computeHash([]), () => this.getGemText2SizeForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemText2SizeForAngular__update' + this.computeHash([]), () => this.getGemText2SizeForAngular__update())
        )).then(__v => this.getGemText2SizeForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemText2SizeForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemText2Size(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText2Weight(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "bold";
        return val_$;
    }

    private getGemText2WeightForAngular__CachedResult: string = undefined;
    public getGemText2WeightForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText2WeightForAngular__CachedResult === undefined) {
            this.getGemText2WeightForAngular__CachedResult = null;
            this.getGemText2WeightForAngular__update();
        }
        return this.getGemText2WeightForAngular__CachedResult;
    }

    public getGemText2WeightForAngular__update(): void {
        
        Promise.resolve(this.getGemText2WeightForAngular(
            this.createDomainObserverRegisterFunction('getGemText2WeightForAngular__update' + this.computeHash([]), () => this.getGemText2WeightForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemText2WeightForAngular__update' + this.computeHash([]), () => this.getGemText2WeightForAngular__update())
        )).then(__v => this.getGemText2WeightForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemText2WeightForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemText2Weight(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemImage5Width(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "200px";
        return val_$;
    }

    private getGemImage5WidthForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemImage5WidthForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemImage5WidthForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemImage5WidthForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemImage5WidthForAngular__update(c);
        }
        return this.getGemImage5WidthForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemImage5WidthForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemImage5WidthForAngular(c,
            this.createDomainObserverRegisterFunction('getGemImage5WidthForAngular__update' + this.computeHash([c]), () => this.getGemImage5WidthForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemImage5WidthForAngular__update' + this.computeHash([c]), () => this.getGemImage5WidthForAngular__update(c))
        )).then(__v => this.getGemImage5WidthForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemImage5WidthForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemImage5Width(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemImage5Source(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null){
            return null;
        }
        const val_$: string = "assets/images/" + c.getMake() + ".jpg";
        return val_$;
    }

    private getGemImage5SourceForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemImage5SourceForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemImage5SourceForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemImage5SourceForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemImage5SourceForAngular__update(c);
        }
        return this.getGemImage5SourceForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemImage5SourceForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemImage5SourceForAngular(c,
            this.createDomainObserverRegisterFunction('getGemImage5SourceForAngular__update' + this.computeHash([c]), () => this.getGemImage5SourceForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemImage5SourceForAngular__update' + this.computeHash([c]), () => this.getGemImage5SourceForAngular__update(c))
        )).then(__v => this.getGemImage5SourceForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemImage5SourceForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemImage5Source(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText7Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "Status:";
        return val_$;
    }

    private getGemText7ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText7ValueForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText7ValueForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText7ValueForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText7ValueForAngular__update(c);
        }
        return this.getGemText7ValueForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText7ValueForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText7ValueForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText7ValueForAngular__update' + this.computeHash([c]), () => this.getGemText7ValueForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText7ValueForAngular__update' + this.computeHash([c]), () => this.getGemText7ValueForAngular__update(c))
        )).then(__v => this.getGemText7ValueForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText7ValueForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText7Value(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText8Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null){
            return null;
        }
        const val_$: string = /* Enum.toString */(RentableStatus[c.getRentableStatus()] ? RentableStatus[c.getRentableStatus()] : '');
        return val_$;
    }

    private getGemText8ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText8ValueForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText8ValueForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText8ValueForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText8ValueForAngular__update(c);
        }
        return this.getGemText8ValueForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText8ValueForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText8ValueForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText8ValueForAngular__update' + this.computeHash([c]), () => this.getGemText8ValueForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText8ValueForAngular__update' + this.computeHash([c]), () => this.getGemText8ValueForAngular__update(c))
        )).then(__v => this.getGemText8ValueForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText8ValueForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText8Value(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText8Color(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null){
            return null;
        }
        const val_$: string = c.getRentableStatus() === RentableStatus.AVAILABLE ? "green" : "red";
        return val_$;
    }

    private getGemText8ColorForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText8ColorForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText8ColorForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText8ColorForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText8ColorForAngular__update(c);
        }
        return this.getGemText8ColorForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText8ColorForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText8ColorForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText8ColorForAngular__update' + this.computeHash([c]), () => this.getGemText8ColorForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText8ColorForAngular__update' + this.computeHash([c]), () => this.getGemText8ColorForAngular__update(c))
        )).then(__v => this.getGemText8ColorForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText8ColorForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText8Color(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText9Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "Mileage:";
        return val_$;
    }

    private getGemText9ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText9ValueForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText9ValueForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText9ValueForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText9ValueForAngular__update(c);
        }
        return this.getGemText9ValueForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText9ValueForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText9ValueForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText9ValueForAngular__update' + this.computeHash([c]), () => this.getGemText9ValueForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText9ValueForAngular__update' + this.computeHash([c]), () => this.getGemText9ValueForAngular__update(c))
        )).then(__v => this.getGemText9ValueForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText9ValueForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText9Value(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText10Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null){
            return null;
        }
        const val_$: string = c.getMileage() + " miles";
        return val_$;
    }

    private getGemText10ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText10ValueForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText10ValueForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText10ValueForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText10ValueForAngular__update(c);
        }
        return this.getGemText10ValueForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText10ValueForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText10ValueForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText10ValueForAngular__update' + this.computeHash([c]), () => this.getGemText10ValueForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText10ValueForAngular__update' + this.computeHash([c]), () => this.getGemText10ValueForAngular__update(c))
        )).then(__v => this.getGemText10ValueForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText10ValueForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText10Value(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemGrid6Width(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "auto";
        return val_$;
    }

    private getGemGrid6WidthForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemGrid6WidthForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemGrid6WidthForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemGrid6WidthForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemGrid6WidthForAngular__update(c);
        }
        return this.getGemGrid6WidthForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemGrid6WidthForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemGrid6WidthForAngular(c,
            this.createDomainObserverRegisterFunction('getGemGrid6WidthForAngular__update' + this.computeHash([c]), () => this.getGemGrid6WidthForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemGrid6WidthForAngular__update' + this.computeHash([c]), () => this.getGemGrid6WidthForAngular__update(c))
        )).then(__v => this.getGemGrid6WidthForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemGrid6WidthForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemGrid6Width(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemGrid6ColGap(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "5px";
        return val_$;
    }

    private getGemGrid6ColGapForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemGrid6ColGapForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemGrid6ColGapForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemGrid6ColGapForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemGrid6ColGapForAngular__update(c);
        }
        return this.getGemGrid6ColGapForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemGrid6ColGapForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemGrid6ColGapForAngular(c,
            this.createDomainObserverRegisterFunction('getGemGrid6ColGapForAngular__update' + this.computeHash([c]), () => this.getGemGrid6ColGapForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemGrid6ColGapForAngular__update' + this.computeHash([c]), () => this.getGemGrid6ColGapForAngular__update(c))
        )).then(__v => this.getGemGrid6ColGapForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemGrid6ColGapForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemGrid6ColGap(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemGrid6RowGap(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "5px";
        return val_$;
    }

    private getGemGrid6RowGapForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemGrid6RowGapForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemGrid6RowGapForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemGrid6RowGapForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemGrid6RowGapForAngular__update(c);
        }
        return this.getGemGrid6RowGapForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemGrid6RowGapForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemGrid6RowGapForAngular(c,
            this.createDomainObserverRegisterFunction('getGemGrid6RowGapForAngular__update' + this.computeHash([c]), () => this.getGemGrid6RowGapForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemGrid6RowGapForAngular__update' + this.computeHash([c]), () => this.getGemGrid6RowGapForAngular__update(c))
        )).then(__v => this.getGemGrid6RowGapForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemGrid6RowGapForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemGrid6RowGap(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText12Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null){
            return null;
        }
        const val_$: string = ((<any>Math).fround(c.getCostPerDay() * 3)) + "\u20ac for 3 days";
        return val_$;
    }

    private getGemText12ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText12ValueForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText12ValueForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText12ValueForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText12ValueForAngular__update(c);
        }
        return this.getGemText12ValueForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText12ValueForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText12ValueForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText12ValueForAngular__update' + this.computeHash([c]), () => this.getGemText12ValueForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText12ValueForAngular__update' + this.computeHash([c]), () => this.getGemText12ValueForAngular__update(c))
        )).then(__v => this.getGemText12ValueForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText12ValueForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText12Value(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText12Size(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "1.5rem";
        return val_$;
    }

    private getGemText12SizeForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText12SizeForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText12SizeForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText12SizeForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText12SizeForAngular__update(c);
        }
        return this.getGemText12SizeForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText12SizeForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText12SizeForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText12SizeForAngular__update' + this.computeHash([c]), () => this.getGemText12SizeForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText12SizeForAngular__update' + this.computeHash([c]), () => this.getGemText12SizeForAngular__update(c))
        )).then(__v => this.getGemText12SizeForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText12SizeForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText12Size(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public async rentCar(val_$_$0: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        __regObsToDomainObj(val_$_$0);
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    public getGemButton13Width(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "calc(8ch + 10px)";
        return val_$;
    }

    private getGemButton13WidthForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemButton13WidthForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton13WidthForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemButton13WidthForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemButton13WidthForAngular__update(c);
        }
        return this.getGemButton13WidthForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemButton13WidthForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemButton13WidthForAngular(c,
            this.createDomainObserverRegisterFunction('getGemButton13WidthForAngular__update' + this.computeHash([c]), () => this.getGemButton13WidthForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemButton13WidthForAngular__update' + this.computeHash([c]), () => this.getGemButton13WidthForAngular__update(c))
        )).then(__v => this.getGemButton13WidthForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemButton13WidthForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemButton13Width(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemButton13Label(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "Rent car";
        return val_$;
    }

    private getGemButton13LabelForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemButton13LabelForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton13LabelForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemButton13LabelForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemButton13LabelForAngular__update(c);
        }
        return this.getGemButton13LabelForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemButton13LabelForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemButton13LabelForAngular(c,
            this.createDomainObserverRegisterFunction('getGemButton13LabelForAngular__update' + this.computeHash([c]), () => this.getGemButton13LabelForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemButton13LabelForAngular__update' + this.computeHash([c]), () => this.getGemButton13LabelForAngular__update(c))
        )).then(__v => this.getGemButton13LabelForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemButton13LabelForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemButton13Label(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public async gemButton13LeftClick(event_$: void, c: Car) {
        if (await this.rentCar(c) != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))((await this.rentCar(c)));
        }
    }

    public updateCar(val_$_$0: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): (p1: void) => void {
        __regObsToDomainObj(val_$_$0);
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    public getGemButton14Width(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "calc(10ch + 10px)";
        return val_$;
    }

    private getGemButton14WidthForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemButton14WidthForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton14WidthForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemButton14WidthForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemButton14WidthForAngular__update(c);
        }
        return this.getGemButton14WidthForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemButton14WidthForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemButton14WidthForAngular(c,
            this.createDomainObserverRegisterFunction('getGemButton14WidthForAngular__update' + this.computeHash([c]), () => this.getGemButton14WidthForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemButton14WidthForAngular__update' + this.computeHash([c]), () => this.getGemButton14WidthForAngular__update(c))
        )).then(__v => this.getGemButton14WidthForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemButton14WidthForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemButton14Width(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemButton14Label(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "Update car";
        return val_$;
    }

    private getGemButton14LabelForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemButton14LabelForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemButton14LabelForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemButton14LabelForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemButton14LabelForAngular__update(c);
        }
        return this.getGemButton14LabelForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemButton14LabelForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemButton14LabelForAngular(c,
            this.createDomainObserverRegisterFunction('getGemButton14LabelForAngular__update' + this.computeHash([c]), () => this.getGemButton14LabelForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemButton14LabelForAngular__update' + this.computeHash([c]), () => this.getGemButton14LabelForAngular__update(c))
        )).then(__v => this.getGemButton14LabelForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemButton14LabelForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemButton14Label(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public gemButton14LeftClick(event_$: void, c: Car) {
        if (this.updateCar(c) != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))(this.updateCar(c));
        }
    }

    public getGemColumn11Width(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "40ch";
        return val_$;
    }

    private getGemColumn11WidthForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemColumn11WidthForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn11WidthForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemColumn11WidthForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemColumn11WidthForAngular__update(c);
        }
        return this.getGemColumn11WidthForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemColumn11WidthForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemColumn11WidthForAngular(c,
            this.createDomainObserverRegisterFunction('getGemColumn11WidthForAngular__update' + this.computeHash([c]), () => this.getGemColumn11WidthForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemColumn11WidthForAngular__update' + this.computeHash([c]), () => this.getGemColumn11WidthForAngular__update(c))
        )).then(__v => this.getGemColumn11WidthForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemColumn11WidthForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemColumn11Width(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn11RowGap(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "10px";
        return val_$;
    }

    private getGemColumn11RowGapForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemColumn11RowGapForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn11RowGapForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemColumn11RowGapForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemColumn11RowGapForAngular__update(c);
        }
        return this.getGemColumn11RowGapForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemColumn11RowGapForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemColumn11RowGapForAngular(c,
            this.createDomainObserverRegisterFunction('getGemColumn11RowGapForAngular__update' + this.computeHash([c]), () => this.getGemColumn11RowGapForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemColumn11RowGapForAngular__update' + this.computeHash([c]), () => this.getGemColumn11RowGapForAngular__update(c))
        )).then(__v => this.getGemColumn11RowGapForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemColumn11RowGapForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemColumn11RowGap(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn11HAlign(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "right";
        return val_$;
    }

    private getGemColumn11HAlignForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemColumn11HAlignForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn11HAlignForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemColumn11HAlignForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemColumn11HAlignForAngular__update(c);
        }
        return this.getGemColumn11HAlignForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemColumn11HAlignForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemColumn11HAlignForAngular(c,
            this.createDomainObserverRegisterFunction('getGemColumn11HAlignForAngular__update' + this.computeHash([c]), () => this.getGemColumn11HAlignForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemColumn11HAlignForAngular__update' + this.computeHash([c]), () => this.getGemColumn11HAlignForAngular__update(c))
        )).then(__v => this.getGemColumn11HAlignForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemColumn11HAlignForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemColumn11HAlign(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow4ColGap(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "20px";
        return val_$;
    }

    private getGemRow4ColGapForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow4ColGapForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow4ColGapForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemRow4ColGapForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemRow4ColGapForAngular__update(c);
        }
        return this.getGemRow4ColGapForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemRow4ColGapForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemRow4ColGapForAngular(c,
            this.createDomainObserverRegisterFunction('getGemRow4ColGapForAngular__update' + this.computeHash([c]), () => this.getGemRow4ColGapForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemRow4ColGapForAngular__update' + this.computeHash([c]), () => this.getGemRow4ColGapForAngular__update(c))
        )).then(__v => this.getGemRow4ColGapForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemRow4ColGapForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemRow4ColGap(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow4VAlign(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "bottom";
        return val_$;
    }

    private getGemRow4VAlignForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow4VAlignForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow4VAlignForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemRow4VAlignForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemRow4VAlignForAngular__update(c);
        }
        return this.getGemRow4VAlignForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemRow4VAlignForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemRow4VAlignForAngular(c,
            this.createDomainObserverRegisterFunction('getGemRow4VAlignForAngular__update' + this.computeHash([c]), () => this.getGemRow4VAlignForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemRow4VAlignForAngular__update' + this.computeHash([c]), () => this.getGemRow4VAlignForAngular__update(c))
        )).then(__v => this.getGemRow4VAlignForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemRow4VAlignForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemRow4VAlign(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow4HAlign(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "space-between";
        return val_$;
    }

    private getGemRow4HAlignForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow4HAlignForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow4HAlignForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemRow4HAlignForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemRow4HAlignForAngular__update(c);
        }
        return this.getGemRow4HAlignForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemRow4HAlignForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemRow4HAlignForAngular(c,
            this.createDomainObserverRegisterFunction('getGemRow4HAlignForAngular__update' + this.computeHash([c]), () => this.getGemRow4HAlignForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemRow4HAlignForAngular__update' + this.computeHash([c]), () => this.getGemRow4HAlignForAngular__update(c))
        )).then(__v => this.getGemRow4HAlignForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemRow4HAlignForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemRow4HAlign(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getCarInfoTitle(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null || c == null || c == null){
            return null;
        }
        const val_$: string = c.getMake() + " " + c.getModel() + " " + c.getName();
        return val_$;
    }

    private getCarInfoTitleForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getCarInfoTitleForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCarInfoTitleForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getCarInfoTitleForAngular__CachedResult.set([c.getGemId()], null);
            this.getCarInfoTitleForAngular__update(c);
        }
        return this.getCarInfoTitleForAngular__CachedResult.get([c.getGemId()]);
    }

    public getCarInfoTitleForAngular__update(c: Car): void {
        
        Promise.resolve(this.getCarInfoTitleForAngular(c,
            this.createDomainObserverRegisterFunction('getCarInfoTitleForAngular__update' + this.computeHash([c]), () => this.getCarInfoTitleForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getCarInfoTitleForAngular__update' + this.computeHash([c]), () => this.getCarInfoTitleForAngular__update(c))
        )).then(__v => this.getCarInfoTitleForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getCarInfoTitleForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getCarInfoTitle(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public async getIt3Iterable(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Car>> {
        if (false){
            return null;
        }
        return (await GemListUtil.toArraySync(__regObsToStateVar(await this.getCars(__regObsToDomainObj, __regObsToStateVar), "_cars")));
    }

    private getIt3IterableForAngular__CachedResult: Array<Car> = undefined;
    public getIt3IterableForAngular__ChangeDetection(): Array<Car> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt3IterableForAngular__CachedResult === undefined) {
            this.getIt3IterableForAngular__CachedResult = null;
            this.getIt3IterableForAngular__update();
        }
        return this.getIt3IterableForAngular__CachedResult;
    }

    public getIt3IterableForAngular__update(): void {
        
        Promise.resolve(this.getIt3IterableForAngular(
            this.createDomainObserverRegisterFunction('getIt3IterableForAngular__update' + this.computeHash([]), () => this.getIt3IterableForAngular__update()),
            this.createStateVarObserverRegisterFunction('getIt3IterableForAngular__update' + this.computeHash([]), () => this.getIt3IterableForAngular__update())
        )).then(__v => this.getIt3IterableForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ async getIt3IterableForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Car>> {
        return GemListUtil.toArraySync<any>((await GemListUtil.toArraySync((await this.getIt3Iterable(__regObsToDomainObj, __regObsToStateVar)))));
    }

    public getGemColumn1RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "10px";
        return val_$;
    }

    private getGemColumn1RowGapForAngular__CachedResult: string = undefined;
    public getGemColumn1RowGapForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn1RowGapForAngular__CachedResult === undefined) {
            this.getGemColumn1RowGapForAngular__CachedResult = null;
            this.getGemColumn1RowGapForAngular__update();
        }
        return this.getGemColumn1RowGapForAngular__CachedResult;
    }

    public getGemColumn1RowGapForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn1RowGapForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn1RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn1RowGapForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn1RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn1RowGapForAngular__update())
        )).then(__v => this.getGemColumn1RowGapForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn1RowGapForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn1RowGap(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn1Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "50%";
        return val_$;
    }

    private getGemColumn1WidthForAngular__CachedResult: string = undefined;
    public getGemColumn1WidthForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn1WidthForAngular__CachedResult === undefined) {
            this.getGemColumn1WidthForAngular__CachedResult = null;
            this.getGemColumn1WidthForAngular__update();
        }
        return this.getGemColumn1WidthForAngular__CachedResult;
    }

    public getGemColumn1WidthForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn1WidthForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn1WidthForAngular__update' + this.computeHash([]), () => this.getGemColumn1WidthForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn1WidthForAngular__update' + this.computeHash([]), () => this.getGemColumn1WidthForAngular__update())
        )).then(__v => this.getGemColumn1WidthForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn1WidthForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn1Width(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn1HAlign(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "center";
        return val_$;
    }

    private getGemColumn1HAlignForAngular__CachedResult: string = undefined;
    public getGemColumn1HAlignForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn1HAlignForAngular__CachedResult === undefined) {
            this.getGemColumn1HAlignForAngular__CachedResult = null;
            this.getGemColumn1HAlignForAngular__update();
        }
        return this.getGemColumn1HAlignForAngular__CachedResult;
    }

    public getGemColumn1HAlignForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn1HAlignForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn1HAlignForAngular__update' + this.computeHash([]), () => this.getGemColumn1HAlignForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn1HAlignForAngular__update' + this.computeHash([]), () => this.getGemColumn1HAlignForAngular__update())
        )).then(__v => this.getGemColumn1HAlignForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn1HAlignForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn1HAlign(__regObsToDomainObj, __regObsToStateVar);
    }

    async initIt3Iterable() {
        {
            let array = (await GemListUtil.toArraySync(await this.getCars()));
            for(let index = 0; index < array.length; index++) {
                let c = array[index];
                {
                }
            }
        }
    }

    async initCars() {
        if (!this._carsSetExternally){
            this._cars = (await GemListUtil.toArraySync(await CarrentalManager.getCarList()));
        }
        await this.initIt3Iterable();
    }

    protected allVarsInited: boolean = false;
    public async init() {
        await CarrentalManager.addObserver(this);
        await CommandManager.executeCommand<any>(new Car_subscribeManagerEvents());
        await this.initCars();
    }

    public async destroy() {
        await CarrentalManager.removeObserver(this);
    }

    public async notifyCarDeleted(gemId_$: number) {
    }

    public async notifyCarAdded(val_$: Car) {
    }
}
CarOverviewTOP["__class"] = "gui.CarOverviewTOP";
CarOverviewTOP["__interfaces"] = ["carrental.CarrentalObserver"];




