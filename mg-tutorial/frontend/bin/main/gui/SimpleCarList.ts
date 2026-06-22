/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Car } from 'carrental/Car';
import { CarrentalManager } from 'carrental/CarrentalManager';
import { EmptyCarrentalObserver } from 'carrental/EmptyCarrentalObserver';
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
export class SimpleCarList extends EmptyCarrentalObserver {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = SimpleCarList.nextId++;

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
            let hash: number = SimpleCarList.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.SimpleCarList" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.SimpleCarList" + this.uniqueIdentifier);
        }
    }

    public ngOnDestroy(): void {
        ComponentObserverManager.removeObservers("gui.SimpleCarList" + this.uniqueIdentifier);
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

        ComponentObserverManager.callStateVariableObserver("_cars", "gui.SimpleCarList" + this.uniqueIdentifier);
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

    public getGemText2Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Car list";
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

    /*private*/ getGemText2ValueForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemText2Value(__regObsToDomainObj, __regObsToStateVar);
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

    public getGemText5Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "Pricey!";
        return val_$;
    }

    private getGemText5ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText5ValueForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText5ValueForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText5ValueForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText5ValueForAngular__update(c);
        }
        return this.getGemText5ValueForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText5ValueForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText5ValueForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText5ValueForAngular__update' + this.computeHash([c]), () => this.getGemText5ValueForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText5ValueForAngular__update' + this.computeHash([c]), () => this.getGemText5ValueForAngular__update(c))
        )).then(__v => this.getGemText5ValueForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText5ValueForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText5Value(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText5Color(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "red";
        return val_$;
    }

    private getGemText5ColorForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText5ColorForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText5ColorForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText5ColorForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText5ColorForAngular__update(c);
        }
        return this.getGemText5ColorForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText5ColorForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText5ColorForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText5ColorForAngular__update' + this.computeHash([c]), () => this.getGemText5ColorForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText5ColorForAngular__update' + this.computeHash([c]), () => this.getGemText5ColorForAngular__update(c))
        )).then(__v => this.getGemText5ColorForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText5ColorForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText5Color(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText6Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "Not pricey!";
        return val_$;
    }

    private getGemText6ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText6ValueForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText6ValueForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText6ValueForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText6ValueForAngular__update(c);
        }
        return this.getGemText6ValueForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText6ValueForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText6ValueForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText6ValueForAngular__update' + this.computeHash([c]), () => this.getGemText6ValueForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText6ValueForAngular__update' + this.computeHash([c]), () => this.getGemText6ValueForAngular__update(c))
        )).then(__v => this.getGemText6ValueForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText6ValueForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText6Value(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText6Color(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false){
            return null;
        }
        const val_$: string = "green";
        return val_$;
    }

    private getGemText6ColorForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText6ColorForAngular__ChangeDetection(c: Car): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText6ColorForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGemText6ColorForAngular__CachedResult.set([c.getGemId()], null);
            this.getGemText6ColorForAngular__update(c);
        }
        return this.getGemText6ColorForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGemText6ColorForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGemText6ColorForAngular(c,
            this.createDomainObserverRegisterFunction('getGemText6ColorForAngular__update' + this.computeHash([c]), () => this.getGemText6ColorForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGemText6ColorForAngular__update' + this.computeHash([c]), () => this.getGemText6ColorForAngular__update(c))
        )).then(__v => this.getGemText6ColorForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText6ColorForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        return this.getGemText6Color(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGuard4Condition(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        __regObsToDomainObj(c);
        if (false || c == null || c.getMake() == null){
            return null;
        }
        return c.getMake() === ("Ford");
    }

    private getGuard4ConditionForAngular__CachedResult: ManyKeysMap<any, boolean> = new ManyKeysMap()
    public getGuard4ConditionForAngular__ChangeDetection(c: Car): boolean {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGuard4ConditionForAngular__CachedResult.get([c.getGemId()]) === undefined) {
            this.getGuard4ConditionForAngular__CachedResult.set([c.getGemId()], null);
            this.getGuard4ConditionForAngular__update(c);
        }
        return this.getGuard4ConditionForAngular__CachedResult.get([c.getGemId()]);
    }

    public getGuard4ConditionForAngular__update(c: Car): void {
        
        Promise.resolve(this.getGuard4ConditionForAngular(c,
            this.createDomainObserverRegisterFunction('getGuard4ConditionForAngular__update' + this.computeHash([c]), () => this.getGuard4ConditionForAngular__update(c)),
            this.createStateVarObserverRegisterFunction('getGuard4ConditionForAngular__update' + this.computeHash([c]), () => this.getGuard4ConditionForAngular__update(c))
        )).then(__v => this.getGuard4ConditionForAngular__CachedResult.set([c.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGuard4ConditionForAngular(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): boolean {
        __regObsToDomainObj(c);
        return this.getGuard4Condition(c, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText7Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null){
            return null;
        }
        const val_$: string = "Model: " + c.getModel();
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
        const val_$: string = "Make: " + c.getMake();
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

    public getGemText9Value(c: Car, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(c);
        if (false || c == null){
            return null;
        }
        const val_$: string = "Name: " + c.getName();
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
SimpleCarList["__class"] = "gui.SimpleCarList";
SimpleCarList["__interfaces"] = ["carrental.CarrentalObserver"];




