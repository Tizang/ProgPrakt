/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { Car } from 'carrental/Car';
import { CarrentalManager } from 'carrental/CarrentalManager';
import { StringHelper } from '@umlp/commonj2ts';
import { ValidationError } from '@umlp/input';
import { GemTextInputValidity } from '@umlp/input';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export class CarForm {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = CarForm.nextId++;

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
            let hash: number = CarForm.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.CarForm" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.CarForm" + this.uniqueIdentifier);
        }
    }

    public ngOnDestroy(): void {
        ComponentObserverManager.removeObservers("gui.CarForm" + this.uniqueIdentifier);
    }


    protected _router: Router;

    _car: Car;

    public _carSetExternally: boolean;

    public gui_CarForm_car_RoutingId: number;

    public constructor() {
        if (this._car === undefined) { this._car = null; }
        this._carSetExternally = false;
        if (this.gui_CarForm_car_RoutingId === undefined) { this.gui_CarForm_car_RoutingId = null; }
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

        ComponentObserverManager.callStateVariableObserver("_car", "gui.CarForm" + this.uniqueIdentifier);
        this.getCarForAngular__update();
    }

    public getGemTextInput3LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Make:";
        return val_$;
    }

    private getGemTextInput3LabelTextForAngular__CachedResult: string = undefined;
    public getGemTextInput3LabelTextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput3LabelTextForAngular__CachedResult === undefined) {
            this.getGemTextInput3LabelTextForAngular__CachedResult = null;
            this.getGemTextInput3LabelTextForAngular__update();
        }
        return this.getGemTextInput3LabelTextForAngular__CachedResult;
    }

    public getGemTextInput3LabelTextForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput3LabelTextForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput3LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput3LabelTextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput3LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput3LabelTextForAngular__update())
        )).then(__v => this.getGemTextInput3LabelTextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput3LabelTextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput3LabelText(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput3Entry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false || __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")) == null){
            return null;
        }
        const val_$: string = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getMake();
        return val_$;
    }

    private getGemTextInput3EntryForAngular__CachedResult: string = undefined;
    public getGemTextInput3EntryForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput3EntryForAngular__CachedResult === undefined) {
            this.getGemTextInput3EntryForAngular__CachedResult = null;
            this.getGemTextInput3EntryForAngular__update();
        }
        return this.getGemTextInput3EntryForAngular__CachedResult;
    }

    public getGemTextInput3EntryForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput3EntryForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput3EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput3EntryForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput3EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput3EntryForAngular__update())
        )).then(__v => this.getGemTextInput3EntryForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput3EntryForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput3Entry(__regObsToDomainObj, __regObsToStateVar);
    }

    public convertGemTextInput3Entry(conv_val_$: string): string {
        return conv_val_$;
    }

    public async setGemTextInput3Entry(conv_val_$: string) {
        if (false || this.getCar() == null){
            return;
        }
        const val_$: string = this.convertGemTextInput3Entry(conv_val_$);
        await this.getCar().setMake$java_lang_String(val_$);
    }

    public getGemTextInput3Validity(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        let errorMessage: string = null;
        const errorOpt: (ValidationError | null) = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getMakeValidationError();
        if ((errorOpt != null)){
            const error: ValidationError = ((v) => { if (v == null) throw new Error('NoSuchElementException'); return v; })(errorOpt);
            errorMessage = error.getShortError();
        }
        return errorMessage == null ? null : new GemTextInputValidity("Error", errorMessage);
    }

    private getGemTextInput3ValidityForAngular__CachedResult: GemTextInputValidity = undefined;
    public getGemTextInput3ValidityForAngular__ChangeDetection(): GemTextInputValidity {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput3ValidityForAngular__CachedResult === undefined) {
            this.getGemTextInput3ValidityForAngular__CachedResult = null;
            this.getGemTextInput3ValidityForAngular__update();
        }
        return this.getGemTextInput3ValidityForAngular__CachedResult;
    }

    public getGemTextInput3ValidityForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput3ValidityForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput3ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput3ValidityForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput3ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput3ValidityForAngular__update())
        )).then(__v => this.getGemTextInput3ValidityForAngular__CachedResult = __v === undefined ? null : __v);
    }

    public getGemTextInput3ValidityForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        return this.getGemTextInput3Validity(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput4LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Model:";
        return val_$;
    }

    private getGemTextInput4LabelTextForAngular__CachedResult: string = undefined;
    public getGemTextInput4LabelTextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput4LabelTextForAngular__CachedResult === undefined) {
            this.getGemTextInput4LabelTextForAngular__CachedResult = null;
            this.getGemTextInput4LabelTextForAngular__update();
        }
        return this.getGemTextInput4LabelTextForAngular__CachedResult;
    }

    public getGemTextInput4LabelTextForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput4LabelTextForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput4LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput4LabelTextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput4LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput4LabelTextForAngular__update())
        )).then(__v => this.getGemTextInput4LabelTextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput4LabelTextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput4LabelText(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput4Entry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false || __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")) == null){
            return null;
        }
        const val_$: string = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getModel();
        return val_$;
    }

    private getGemTextInput4EntryForAngular__CachedResult: string = undefined;
    public getGemTextInput4EntryForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput4EntryForAngular__CachedResult === undefined) {
            this.getGemTextInput4EntryForAngular__CachedResult = null;
            this.getGemTextInput4EntryForAngular__update();
        }
        return this.getGemTextInput4EntryForAngular__CachedResult;
    }

    public getGemTextInput4EntryForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput4EntryForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput4EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput4EntryForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput4EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput4EntryForAngular__update())
        )).then(__v => this.getGemTextInput4EntryForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput4EntryForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput4Entry(__regObsToDomainObj, __regObsToStateVar);
    }

    public convertGemTextInput4Entry(conv_val_$: string): string {
        return conv_val_$;
    }

    public async setGemTextInput4Entry(conv_val_$: string) {
        if (false || this.getCar() == null){
            return;
        }
        const val_$: string = this.convertGemTextInput4Entry(conv_val_$);
        await this.getCar().setModel$java_lang_String(val_$);
    }

    public getGemTextInput4Validity(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        let errorMessage: string = null;
        const errorOpt: (ValidationError | null) = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getModelValidationError();
        if ((errorOpt != null)){
            const error: ValidationError = ((v) => { if (v == null) throw new Error('NoSuchElementException'); return v; })(errorOpt);
            errorMessage = error.getShortError();
        }
        return errorMessage == null ? null : new GemTextInputValidity("Error", errorMessage);
    }

    private getGemTextInput4ValidityForAngular__CachedResult: GemTextInputValidity = undefined;
    public getGemTextInput4ValidityForAngular__ChangeDetection(): GemTextInputValidity {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput4ValidityForAngular__CachedResult === undefined) {
            this.getGemTextInput4ValidityForAngular__CachedResult = null;
            this.getGemTextInput4ValidityForAngular__update();
        }
        return this.getGemTextInput4ValidityForAngular__CachedResult;
    }

    public getGemTextInput4ValidityForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput4ValidityForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput4ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput4ValidityForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput4ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput4ValidityForAngular__update())
        )).then(__v => this.getGemTextInput4ValidityForAngular__CachedResult = __v === undefined ? null : __v);
    }

    public getGemTextInput4ValidityForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        return this.getGemTextInput4Validity(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput5LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Name:";
        return val_$;
    }

    private getGemTextInput5LabelTextForAngular__CachedResult: string = undefined;
    public getGemTextInput5LabelTextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput5LabelTextForAngular__CachedResult === undefined) {
            this.getGemTextInput5LabelTextForAngular__CachedResult = null;
            this.getGemTextInput5LabelTextForAngular__update();
        }
        return this.getGemTextInput5LabelTextForAngular__CachedResult;
    }

    public getGemTextInput5LabelTextForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput5LabelTextForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput5LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput5LabelTextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput5LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput5LabelTextForAngular__update())
        )).then(__v => this.getGemTextInput5LabelTextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput5LabelTextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput5LabelText(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput5Entry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false || __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")) == null){
            return null;
        }
        const val_$: string = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getName();
        return val_$;
    }

    private getGemTextInput5EntryForAngular__CachedResult: string = undefined;
    public getGemTextInput5EntryForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput5EntryForAngular__CachedResult === undefined) {
            this.getGemTextInput5EntryForAngular__CachedResult = null;
            this.getGemTextInput5EntryForAngular__update();
        }
        return this.getGemTextInput5EntryForAngular__CachedResult;
    }

    public getGemTextInput5EntryForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput5EntryForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput5EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput5EntryForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput5EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput5EntryForAngular__update())
        )).then(__v => this.getGemTextInput5EntryForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput5EntryForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput5Entry(__regObsToDomainObj, __regObsToStateVar);
    }

    public convertGemTextInput5Entry(conv_val_$: string): string {
        return conv_val_$;
    }

    public async setGemTextInput5Entry(conv_val_$: string) {
        if (false || this.getCar() == null){
            return;
        }
        const val_$: string = this.convertGemTextInput5Entry(conv_val_$);
        await this.getCar().setName$java_lang_String(val_$);
    }

    public getGemTextInput5Validity(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        let errorMessage: string = null;
        const errorOpt: (ValidationError | null) = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getNameValidationError();
        if ((errorOpt != null)){
            const error: ValidationError = ((v) => { if (v == null) throw new Error('NoSuchElementException'); return v; })(errorOpt);
            errorMessage = error.getShortError();
        }
        return errorMessage == null ? null : new GemTextInputValidity("Error", errorMessage);
    }

    private getGemTextInput5ValidityForAngular__CachedResult: GemTextInputValidity = undefined;
    public getGemTextInput5ValidityForAngular__ChangeDetection(): GemTextInputValidity {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput5ValidityForAngular__CachedResult === undefined) {
            this.getGemTextInput5ValidityForAngular__CachedResult = null;
            this.getGemTextInput5ValidityForAngular__update();
        }
        return this.getGemTextInput5ValidityForAngular__CachedResult;
    }

    public getGemTextInput5ValidityForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput5ValidityForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput5ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput5ValidityForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput5ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput5ValidityForAngular__update())
        )).then(__v => this.getGemTextInput5ValidityForAngular__CachedResult = __v === undefined ? null : __v);
    }

    public getGemTextInput5ValidityForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        return this.getGemTextInput5Validity(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput6LabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Cost per day:";
        return val_$;
    }

    private getGemTextInput6LabelTextForAngular__CachedResult: string = undefined;
    public getGemTextInput6LabelTextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput6LabelTextForAngular__CachedResult === undefined) {
            this.getGemTextInput6LabelTextForAngular__CachedResult = null;
            this.getGemTextInput6LabelTextForAngular__update();
        }
        return this.getGemTextInput6LabelTextForAngular__CachedResult;
    }

    public getGemTextInput6LabelTextForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput6LabelTextForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput6LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput6LabelTextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput6LabelTextForAngular__update' + this.computeHash([]), () => this.getGemTextInput6LabelTextForAngular__update())
        )).then(__v => this.getGemTextInput6LabelTextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput6LabelTextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput6LabelText(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput6InputType(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "number";
        return val_$;
    }

    private getGemTextInput6InputTypeForAngular__CachedResult: string = undefined;
    public getGemTextInput6InputTypeForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput6InputTypeForAngular__CachedResult === undefined) {
            this.getGemTextInput6InputTypeForAngular__CachedResult = null;
            this.getGemTextInput6InputTypeForAngular__update();
        }
        return this.getGemTextInput6InputTypeForAngular__CachedResult;
    }

    public getGemTextInput6InputTypeForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput6InputTypeForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput6InputTypeForAngular__update' + this.computeHash([]), () => this.getGemTextInput6InputTypeForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput6InputTypeForAngular__update' + this.computeHash([]), () => this.getGemTextInput6InputTypeForAngular__update())
        )).then(__v => this.getGemTextInput6InputTypeForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput6InputTypeForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput6InputType(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemTextInput6Entry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false || __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")) == null){
            return null;
        }
        const val_$: string = /* valueOf */String(__regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getCostPerDay()).toString();
        return val_$;
    }

    private getGemTextInput6EntryForAngular__CachedResult: string = undefined;
    public getGemTextInput6EntryForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput6EntryForAngular__CachedResult === undefined) {
            this.getGemTextInput6EntryForAngular__CachedResult = null;
            this.getGemTextInput6EntryForAngular__update();
        }
        return this.getGemTextInput6EntryForAngular__CachedResult;
    }

    public getGemTextInput6EntryForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput6EntryForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput6EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput6EntryForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput6EntryForAngular__update' + this.computeHash([]), () => this.getGemTextInput6EntryForAngular__update())
        )).then(__v => this.getGemTextInput6EntryForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemTextInput6EntryForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemTextInput6Entry(__regObsToDomainObj, __regObsToStateVar);
    }

    public convertGemTextInput6Entry(conv_val_$: string): number {
        return parseFloat(conv_val_$);
    }

    public async setGemTextInput6Entry(conv_val_$: string) {
        if (false || this.getCar() == null){
            return;
        }
        const val_$: number = this.convertGemTextInput6Entry(conv_val_$);
        await this.getCar().setCostPerDay$java_lang_Float(val_$);
    }

    public getGemTextInput6Validity(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        let errorMessage: string = null;
        const errorOpt: (ValidationError | null) = __regObsToDomainObj(__regObsToStateVar(this.getCar(__regObsToDomainObj, __regObsToStateVar), "_car")).getCostPerDayValidationError();
        if ((errorOpt != null)){
            const error: ValidationError = ((v) => { if (v == null) throw new Error('NoSuchElementException'); return v; })(errorOpt);
            errorMessage = error.getShortError();
        }
        return errorMessage == null ? null : new GemTextInputValidity("Error", errorMessage);
    }

    private getGemTextInput6ValidityForAngular__CachedResult: GemTextInputValidity = undefined;
    public getGemTextInput6ValidityForAngular__ChangeDetection(): GemTextInputValidity {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemTextInput6ValidityForAngular__CachedResult === undefined) {
            this.getGemTextInput6ValidityForAngular__CachedResult = null;
            this.getGemTextInput6ValidityForAngular__update();
        }
        return this.getGemTextInput6ValidityForAngular__CachedResult;
    }

    public getGemTextInput6ValidityForAngular__update(): void {
        
        Promise.resolve(this.getGemTextInput6ValidityForAngular(
            this.createDomainObserverRegisterFunction('getGemTextInput6ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput6ValidityForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemTextInput6ValidityForAngular__update' + this.computeHash([]), () => this.getGemTextInput6ValidityForAngular__update())
        )).then(__v => this.getGemTextInput6ValidityForAngular__CachedResult = __v === undefined ? null : __v);
    }

    public getGemTextInput6ValidityForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        return this.getGemTextInput6Validity(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn2Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "40ch";
        return val_$;
    }

    private getGemColumn2WidthForAngular__CachedResult: string = undefined;
    public getGemColumn2WidthForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn2WidthForAngular__CachedResult === undefined) {
            this.getGemColumn2WidthForAngular__CachedResult = null;
            this.getGemColumn2WidthForAngular__update();
        }
        return this.getGemColumn2WidthForAngular__CachedResult;
    }

    public getGemColumn2WidthForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn2WidthForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn2WidthForAngular__update' + this.computeHash([]), () => this.getGemColumn2WidthForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn2WidthForAngular__update' + this.computeHash([]), () => this.getGemColumn2WidthForAngular__update())
        )).then(__v => this.getGemColumn2WidthForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn2WidthForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn2Width(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn2RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "5px";
        return val_$;
    }

    private getGemColumn2RowGapForAngular__CachedResult: string = undefined;
    public getGemColumn2RowGapForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn2RowGapForAngular__CachedResult === undefined) {
            this.getGemColumn2RowGapForAngular__CachedResult = null;
            this.getGemColumn2RowGapForAngular__update();
        }
        return this.getGemColumn2RowGapForAngular__CachedResult;
    }

    public getGemColumn2RowGapForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn2RowGapForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn2RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn2RowGapForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn2RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn2RowGapForAngular__update())
        )).then(__v => this.getGemColumn2RowGapForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn2RowGapForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn2RowGap(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemCard1Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Card form";
        return val_$;
    }

    private getGemCard1TitleForAngular__CachedResult: string = undefined;
    public getGemCard1TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemCard1TitleForAngular__CachedResult === undefined) {
            this.getGemCard1TitleForAngular__CachedResult = null;
            this.getGemCard1TitleForAngular__update();
        }
        return this.getGemCard1TitleForAngular__CachedResult;
    }

    public getGemCard1TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemCard1TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemCard1TitleForAngular__update' + this.computeHash([]), () => this.getGemCard1TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemCard1TitleForAngular__update' + this.computeHash([]), () => this.getGemCard1TitleForAngular__update())
        )).then(__v => this.getGemCard1TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemCard1TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemCard1Title(__regObsToDomainObj, __regObsToStateVar);
    }

    async initCar() {
        if (!this._carSetExternally){
            if (this.gui_CarForm_car_RoutingId != null){
                this._car = await CarrentalManager.getCarSure(this.gui_CarForm_car_RoutingId);
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
CarForm["__class"] = "gui.CarForm";



