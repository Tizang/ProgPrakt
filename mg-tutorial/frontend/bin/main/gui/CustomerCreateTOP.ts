/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { CarrentalManager } from 'carrental/CarrentalManager';
import { Customer } from 'carrental/Customer';
import { StringHelper } from '@umlp/commonj2ts';
import { ValidationError } from '@umlp/input';
import { GemTextInputValidity } from '@umlp/input';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export abstract class CustomerCreateTOP {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = CustomerCreateTOP.nextId++;

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
            let hash: number = CustomerCreateTOP.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.CustomerCreate" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.CustomerCreate" + this.uniqueIdentifier);
        }
    }


    protected _router: Router;

    _customer: Customer;

    public _customerSetExternally: boolean;

    public gui_CustomerCreate_customer_RoutingId: number;

    public constructor() {
        if (this._customer === undefined) { this._customer = null; }
        this._customerSetExternally = false;
        if (this.gui_CustomerCreate_customer_RoutingId === undefined) { this.gui_CustomerCreate_customer_RoutingId = null; }
    }

    public getCustomer(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Customer {
        return this._customer;
    }

    private getCustomerForAngular__CachedResult: Customer = undefined;
    public getCustomerForAngular__ChangeDetection(): Customer {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCustomerForAngular__CachedResult === undefined) {
            this.getCustomerForAngular__CachedResult = null;
            this.getCustomerForAngular__update();
        }
        return this.getCustomerForAngular__CachedResult;
    }

    public getCustomerForAngular__update(): void {
        
        Promise.resolve(this.getCustomerForAngular(
            this.createDomainObserverRegisterFunction('getCustomerForAngular__update' + this.computeHash([]), () => this.getCustomerForAngular__update()),
            this.createStateVarObserverRegisterFunction('getCustomerForAngular__update' + this.computeHash([]), () => this.getCustomerForAngular__update())
        )).then(__v => this.getCustomerForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getCustomerForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Customer {
        return __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer"));
    }

    public setCustomer(val: Customer) {
                this._customerSetExternally = true;
        this._customer = val;

        ComponentObserverManager.callStateVariableObserver("_customer", "gui.CustomerCreate" + this.uniqueIdentifier);
        this.getCustomerForAngular__update();
    }

    public getNameLabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Name: ";
        return val_$;
    }

    private getNameLabelTextForAngular__CachedResult: string = undefined;
    public getNameLabelTextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getNameLabelTextForAngular__CachedResult === undefined) {
            this.getNameLabelTextForAngular__CachedResult = null;
            this.getNameLabelTextForAngular__update();
        }
        return this.getNameLabelTextForAngular__CachedResult;
    }

    public getNameLabelTextForAngular__update(): void {
        
        Promise.resolve(this.getNameLabelTextForAngular(
            this.createDomainObserverRegisterFunction('getNameLabelTextForAngular__update' + this.computeHash([]), () => this.getNameLabelTextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getNameLabelTextForAngular__update' + this.computeHash([]), () => this.getNameLabelTextForAngular__update())
        )).then(__v => this.getNameLabelTextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getNameLabelTextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getNameLabelText(__regObsToDomainObj, __regObsToStateVar);
    }

    public getNameEntry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false || __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")) == null){
            return null;
        }
        const val_$: string = __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")).getName();
        return val_$;
    }

    private getNameEntryForAngular__CachedResult: string = undefined;
    public getNameEntryForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getNameEntryForAngular__CachedResult === undefined) {
            this.getNameEntryForAngular__CachedResult = null;
            this.getNameEntryForAngular__update();
        }
        return this.getNameEntryForAngular__CachedResult;
    }

    public getNameEntryForAngular__update(): void {
        
        Promise.resolve(this.getNameEntryForAngular(
            this.createDomainObserverRegisterFunction('getNameEntryForAngular__update' + this.computeHash([]), () => this.getNameEntryForAngular__update()),
            this.createStateVarObserverRegisterFunction('getNameEntryForAngular__update' + this.computeHash([]), () => this.getNameEntryForAngular__update())
        )).then(__v => this.getNameEntryForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getNameEntryForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getNameEntry(__regObsToDomainObj, __regObsToStateVar);
    }

    public convertNameEntry(conv_val_$: string): string {
        return conv_val_$;
    }

    public async setNameEntry(conv_val_$: string) {
        if (false || this.getCustomer() == null){
            return;
        }
        const val_$: string = this.convertNameEntry(conv_val_$);
        await this.getCustomer().setName$java_lang_String(val_$);
    }

    public getNameValidity(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        let errorMessage: string = null;
        const errorOpt: (ValidationError | null) = __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")).getNameValidationError();
        if ((errorOpt != null)){
            const error: ValidationError = ((v) => { if (v == null) throw new Error('NoSuchElementException'); return v; })(errorOpt);
            errorMessage = error.getShortError();
        }
        return errorMessage == null ? null : new GemTextInputValidity("Error", errorMessage);
    }

    private getNameValidityForAngular__CachedResult: GemTextInputValidity = undefined;
    public getNameValidityForAngular__ChangeDetection(): GemTextInputValidity {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getNameValidityForAngular__CachedResult === undefined) {
            this.getNameValidityForAngular__CachedResult = null;
            this.getNameValidityForAngular__update();
        }
        return this.getNameValidityForAngular__CachedResult;
    }

    public getNameValidityForAngular__update(): void {
        
        Promise.resolve(this.getNameValidityForAngular(
            this.createDomainObserverRegisterFunction('getNameValidityForAngular__update' + this.computeHash([]), () => this.getNameValidityForAngular__update()),
            this.createStateVarObserverRegisterFunction('getNameValidityForAngular__update' + this.computeHash([]), () => this.getNameValidityForAngular__update())
        )).then(__v => this.getNameValidityForAngular__CachedResult = __v === undefined ? null : __v);
    }

    public getNameValidityForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        return this.getNameValidity(__regObsToDomainObj, __regObsToStateVar);
    }

    public getEmailLabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "E-Mail: ";
        return val_$;
    }

    private getEmailLabelTextForAngular__CachedResult: string = undefined;
    public getEmailLabelTextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getEmailLabelTextForAngular__CachedResult === undefined) {
            this.getEmailLabelTextForAngular__CachedResult = null;
            this.getEmailLabelTextForAngular__update();
        }
        return this.getEmailLabelTextForAngular__CachedResult;
    }

    public getEmailLabelTextForAngular__update(): void {
        
        Promise.resolve(this.getEmailLabelTextForAngular(
            this.createDomainObserverRegisterFunction('getEmailLabelTextForAngular__update' + this.computeHash([]), () => this.getEmailLabelTextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getEmailLabelTextForAngular__update' + this.computeHash([]), () => this.getEmailLabelTextForAngular__update())
        )).then(__v => this.getEmailLabelTextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getEmailLabelTextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getEmailLabelText(__regObsToDomainObj, __regObsToStateVar);
    }

    public getEmailEntry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false || __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")) == null){
            return null;
        }
        const val_$: string = __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")).getEmail();
        return val_$;
    }

    private getEmailEntryForAngular__CachedResult: string = undefined;
    public getEmailEntryForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getEmailEntryForAngular__CachedResult === undefined) {
            this.getEmailEntryForAngular__CachedResult = null;
            this.getEmailEntryForAngular__update();
        }
        return this.getEmailEntryForAngular__CachedResult;
    }

    public getEmailEntryForAngular__update(): void {
        
        Promise.resolve(this.getEmailEntryForAngular(
            this.createDomainObserverRegisterFunction('getEmailEntryForAngular__update' + this.computeHash([]), () => this.getEmailEntryForAngular__update()),
            this.createStateVarObserverRegisterFunction('getEmailEntryForAngular__update' + this.computeHash([]), () => this.getEmailEntryForAngular__update())
        )).then(__v => this.getEmailEntryForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getEmailEntryForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getEmailEntry(__regObsToDomainObj, __regObsToStateVar);
    }

    public convertEmailEntry(conv_val_$: string): string {
        return conv_val_$;
    }

    public async setEmailEntry(conv_val_$: string) {
        if (false || this.getCustomer() == null){
            return;
        }
        const val_$: string = this.convertEmailEntry(conv_val_$);
        await this.getCustomer().setEmail$java_lang_String(val_$);
    }

    public getEmailValidity(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        let errorMessage: string = null;
        const errorOpt: (ValidationError | null) = __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")).getEmailValidationError();
        if ((errorOpt != null)){
            const error: ValidationError = ((v) => { if (v == null) throw new Error('NoSuchElementException'); return v; })(errorOpt);
            errorMessage = error.getShortError();
        }
        return errorMessage == null ? null : new GemTextInputValidity("Error", errorMessage);
    }

    private getEmailValidityForAngular__CachedResult: GemTextInputValidity = undefined;
    public getEmailValidityForAngular__ChangeDetection(): GemTextInputValidity {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getEmailValidityForAngular__CachedResult === undefined) {
            this.getEmailValidityForAngular__CachedResult = null;
            this.getEmailValidityForAngular__update();
        }
        return this.getEmailValidityForAngular__CachedResult;
    }

    public getEmailValidityForAngular__update(): void {
        
        Promise.resolve(this.getEmailValidityForAngular(
            this.createDomainObserverRegisterFunction('getEmailValidityForAngular__update' + this.computeHash([]), () => this.getEmailValidityForAngular__update()),
            this.createStateVarObserverRegisterFunction('getEmailValidityForAngular__update' + this.computeHash([]), () => this.getEmailValidityForAngular__update())
        )).then(__v => this.getEmailValidityForAngular__CachedResult = __v === undefined ? null : __v);
    }

    public getEmailValidityForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        return this.getEmailValidity(__regObsToDomainObj, __regObsToStateVar);
    }

    public getAgeLabelText(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Age: ";
        return val_$;
    }

    private getAgeLabelTextForAngular__CachedResult: string = undefined;
    public getAgeLabelTextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAgeLabelTextForAngular__CachedResult === undefined) {
            this.getAgeLabelTextForAngular__CachedResult = null;
            this.getAgeLabelTextForAngular__update();
        }
        return this.getAgeLabelTextForAngular__CachedResult;
    }

    public getAgeLabelTextForAngular__update(): void {
        
        Promise.resolve(this.getAgeLabelTextForAngular(
            this.createDomainObserverRegisterFunction('getAgeLabelTextForAngular__update' + this.computeHash([]), () => this.getAgeLabelTextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getAgeLabelTextForAngular__update' + this.computeHash([]), () => this.getAgeLabelTextForAngular__update())
        )).then(__v => this.getAgeLabelTextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getAgeLabelTextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getAgeLabelText(__regObsToDomainObj, __regObsToStateVar);
    }

    public getAgeEntry(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false || __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")) == null){
            return null;
        }
        const val_$: string = /* valueOf */String(__regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")).getAge()).toString();
        return val_$;
    }

    private getAgeEntryForAngular__CachedResult: string = undefined;
    public getAgeEntryForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAgeEntryForAngular__CachedResult === undefined) {
            this.getAgeEntryForAngular__CachedResult = null;
            this.getAgeEntryForAngular__update();
        }
        return this.getAgeEntryForAngular__CachedResult;
    }

    public getAgeEntryForAngular__update(): void {
        
        Promise.resolve(this.getAgeEntryForAngular(
            this.createDomainObserverRegisterFunction('getAgeEntryForAngular__update' + this.computeHash([]), () => this.getAgeEntryForAngular__update()),
            this.createStateVarObserverRegisterFunction('getAgeEntryForAngular__update' + this.computeHash([]), () => this.getAgeEntryForAngular__update())
        )).then(__v => this.getAgeEntryForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getAgeEntryForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getAgeEntry(__regObsToDomainObj, __regObsToStateVar);
    }

    public convertAgeEntry(conv_val_$: string): number {
        return parseFloat(conv_val_$);
    }

    public async setAgeEntry(conv_val_$: string) {
        if (false || this.getCustomer() == null){
            return;
        }
        const val_$: number = this.convertAgeEntry(conv_val_$);
        await this.getCustomer().setAge$java_lang_Integer(val_$);
    }

    public getAgeValidity(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        let errorMessage: string = null;
        const errorOpt: (ValidationError | null) = __regObsToDomainObj(__regObsToStateVar(this.getCustomer(__regObsToDomainObj, __regObsToStateVar), "_customer")).getAgeValidationError();
        if ((errorOpt != null)){
            const error: ValidationError = ((v) => { if (v == null) throw new Error('NoSuchElementException'); return v; })(errorOpt);
            errorMessage = error.getShortError();
        }
        return errorMessage == null ? null : new GemTextInputValidity("Error", errorMessage);
    }

    private getAgeValidityForAngular__CachedResult: GemTextInputValidity = undefined;
    public getAgeValidityForAngular__ChangeDetection(): GemTextInputValidity {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAgeValidityForAngular__CachedResult === undefined) {
            this.getAgeValidityForAngular__CachedResult = null;
            this.getAgeValidityForAngular__update();
        }
        return this.getAgeValidityForAngular__CachedResult;
    }

    public getAgeValidityForAngular__update(): void {
        
        Promise.resolve(this.getAgeValidityForAngular(
            this.createDomainObserverRegisterFunction('getAgeValidityForAngular__update' + this.computeHash([]), () => this.getAgeValidityForAngular__update()),
            this.createStateVarObserverRegisterFunction('getAgeValidityForAngular__update' + this.computeHash([]), () => this.getAgeValidityForAngular__update())
        )).then(__v => this.getAgeValidityForAngular__CachedResult = __v === undefined ? null : __v);
    }

    public getAgeValidityForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemTextInputValidity {
        return this.getAgeValidity(__regObsToDomainObj, __regObsToStateVar);
    }

    public async createCustomer(val_$_$0: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        __regObsToDomainObj(val_$_$0);
        return <any>(((funcInst: any) => { if (funcInst == null || typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
    }

    public getRegisterLabel(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Register";
        return val_$;
    }

    private getRegisterLabelForAngular__CachedResult: string = undefined;
    public getRegisterLabelForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getRegisterLabelForAngular__CachedResult === undefined) {
            this.getRegisterLabelForAngular__CachedResult = null;
            this.getRegisterLabelForAngular__update();
        }
        return this.getRegisterLabelForAngular__CachedResult;
    }

    public getRegisterLabelForAngular__update(): void {
        
        Promise.resolve(this.getRegisterLabelForAngular(
            this.createDomainObserverRegisterFunction('getRegisterLabelForAngular__update' + this.computeHash([]), () => this.getRegisterLabelForAngular__update()),
            this.createStateVarObserverRegisterFunction('getRegisterLabelForAngular__update' + this.computeHash([]), () => this.getRegisterLabelForAngular__update())
        )).then(__v => this.getRegisterLabelForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getRegisterLabelForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getRegisterLabel(__regObsToDomainObj, __regObsToStateVar);
    }

    public async registerLeftClick(event_$: void) {
        if (await this.createCustomer(this.getCustomer()) != null){
            (target => (typeof target === 'function') ? target(event_$) : (<any>target).accept(event_$))((await this.createCustomer(this.getCustomer())));
        }
    }

    public getGemColumn1Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "40ch";
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

    public getGemColumn1RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "5px";
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

    public getGemCard0Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Register customer";
        return val_$;
    }

    private getGemCard0TitleForAngular__CachedResult: string = undefined;
    public getGemCard0TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemCard0TitleForAngular__CachedResult === undefined) {
            this.getGemCard0TitleForAngular__CachedResult = null;
            this.getGemCard0TitleForAngular__update();
        }
        return this.getGemCard0TitleForAngular__CachedResult;
    }

    public getGemCard0TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemCard0TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemCard0TitleForAngular__update' + this.computeHash([]), () => this.getGemCard0TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemCard0TitleForAngular__update' + this.computeHash([]), () => this.getGemCard0TitleForAngular__update())
        )).then(__v => this.getGemCard0TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemCard0TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemCard0Title(__regObsToDomainObj, __regObsToStateVar);
    }

    async initCustomer() {
        if (!this._customerSetExternally){
            if (this.gui_CustomerCreate_customer_RoutingId != null){
                this._customer = await CarrentalManager.getCustomerSure(this.gui_CustomerCreate_customer_RoutingId);
            } else {
                this._customer = await CarrentalManager.customerBuilder();
            }
        }
    }

    protected allVarsInited: boolean = false;
    public async init() {
        await this.initCustomer();
    }

    public destroy() {
    }
}
CustomerCreateTOP["__class"] = "gui.CustomerCreateTOP";



