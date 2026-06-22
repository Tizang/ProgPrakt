/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { CarrentalManager } from 'carrental/CarrentalManager';
import { Customer } from 'carrental/Customer';
import { EmptyCarrentalObserver } from 'carrental/EmptyCarrentalObserver';
import { Customer_subscribeManagerEvents } from 'carrental/commands/Customer_subscribeManagerEvents';
import { StringHelper } from '@umlp/commonj2ts';
import { GemPieChartData } from '@umlp/charts';
import { CommandManager } from '@umlp/commonj2ts';
import { NotificationScope } from '@umlp/commonj2ts';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export abstract class CustomerOverviewTOP extends EmptyCarrentalObserver {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = CustomerOverviewTOP.nextId++;

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
            let hash: number = CustomerOverviewTOP.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.CustomerOverview" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.CustomerOverview" + this.uniqueIdentifier);
        }
    }


    protected _router: Router;

    _customers: Array<Customer>;

    public _customersSetExternally: boolean;

    _chartData: GemPieChartData;

    public _chartDataSetExternally: boolean;

    public constructor() {
        super();
        if (this._customers === undefined) { this._customers = null; }
        this._customersSetExternally = false;
        if (this._chartData === undefined) { this._chartData = null; }
        this._chartDataSetExternally = false;
    }

    public getCustomers(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Array<Customer> {
        return this._customers;
    }

    private getCustomersForAngular__CachedResult: Array<Customer> = undefined;
    public getCustomersForAngular__ChangeDetection(): Array<Customer> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCustomersForAngular__CachedResult === undefined) {
            this.getCustomersForAngular__CachedResult = null;
            this.getCustomersForAngular__update();
        }
        return this.getCustomersForAngular__CachedResult;
    }

    public getCustomersForAngular__update(): void {
        
        Promise.resolve(this.getCustomersForAngular(
            this.createDomainObserverRegisterFunction('getCustomersForAngular__update' + this.computeHash([]), () => this.getCustomersForAngular__update()),
            this.createStateVarObserverRegisterFunction('getCustomersForAngular__update' + this.computeHash([]), () => this.getCustomersForAngular__update())
        )).then(__v => this.getCustomersForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ async getCustomersForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Customer>> {
        return GemListUtil.toArraySync<any>((await GemListUtil.toArraySync(__regObsToStateVar((await this.getCustomers(__regObsToDomainObj, __regObsToStateVar)), "_customers"))));
    }

    public setCustomers(val: Array<Customer>) {
                this._customersSetExternally = true;
        this._customers = val;

        ComponentObserverManager.callStateVariableObserver("_customers", "gui.CustomerOverview" + this.uniqueIdentifier);
        this.getCustomersForAngular__update();
    }

    async removeCustomers(gemId_$: number) {
        for(let i: number = /* size */(<number>(await GemListUtil.toArraySync((await this.getCustomers()))).length) - 1; i >= 0; --i) {{
            if (/* get */(await GemListUtil.toArraySync((await this.getCustomers())))[i].getGemId() === gemId_$){
                /* remove */(await GemListUtil.toArraySync((await this.getCustomers()))).splice(i, 1)[0];
            }
        };}
    }

    async addCustomers(val_$: Customer) {
        /* add */(await GemListUtil.toArraySync((await this.getCustomers()))).splice(/* size */(<number>(await GemListUtil.toArraySync((await this.getCustomers()))).length), 0, val_$);
    }

    public getScope(): NotificationScope {
        return NotificationScope.LOCAL;
    }

    public getChartData(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemPieChartData {
        return this._chartData;
    }

    private getChartDataForAngular__CachedResult: GemPieChartData = undefined;
    public getChartDataForAngular__ChangeDetection(): GemPieChartData {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getChartDataForAngular__CachedResult === undefined) {
            this.getChartDataForAngular__CachedResult = null;
            this.getChartDataForAngular__update();
        }
        return this.getChartDataForAngular__CachedResult;
    }

    public getChartDataForAngular__update(): void {
        
        Promise.resolve(this.getChartDataForAngular(
            this.createDomainObserverRegisterFunction('getChartDataForAngular__update' + this.computeHash([]), () => this.getChartDataForAngular__update()),
            this.createStateVarObserverRegisterFunction('getChartDataForAngular__update' + this.computeHash([]), () => this.getChartDataForAngular__update())
        )).then(__v => this.getChartDataForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getChartDataForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemPieChartData {
        return __regObsToStateVar(this.getChartData(__regObsToDomainObj, __regObsToStateVar), "_chartData");
    }

    public setChartData(val: GemPieChartData) {
                this._chartDataSetExternally = true;
        this._chartData = val;

        ComponentObserverManager.callStateVariableObserver("_chartData", "gui.CustomerOverview" + this.uniqueIdentifier);
        this.getChartDataForAngular__update();
    }

    public getGemNavItem2Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Home";
        return val_$;
    }

    private getGemNavItem2TitleForAngular__CachedResult: string = undefined;
    public getGemNavItem2TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem2TitleForAngular__CachedResult === undefined) {
            this.getGemNavItem2TitleForAngular__CachedResult = null;
            this.getGemNavItem2TitleForAngular__update();
        }
        return this.getGemNavItem2TitleForAngular__CachedResult;
    }

    public getGemNavItem2TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem2TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem2TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem2TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem2TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem2TitleForAngular__update())
        )).then(__v => this.getGemNavItem2TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem2TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem2Title(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem2Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/Start";
        return val_$;
    }

    private getGemNavItem2TargetForAngular__CachedResult: string = undefined;
    public getGemNavItem2TargetForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem2TargetForAngular__CachedResult === undefined) {
            this.getGemNavItem2TargetForAngular__CachedResult = null;
            this.getGemNavItem2TargetForAngular__update();
        }
        return this.getGemNavItem2TargetForAngular__CachedResult;
    }

    public getGemNavItem2TargetForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem2TargetForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem2TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem2TargetForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem2TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem2TargetForAngular__update())
        )).then(__v => this.getGemNavItem2TargetForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem2TargetForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem2Target(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem3Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Simple car list";
        return val_$;
    }

    private getGemNavItem3TitleForAngular__CachedResult: string = undefined;
    public getGemNavItem3TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem3TitleForAngular__CachedResult === undefined) {
            this.getGemNavItem3TitleForAngular__CachedResult = null;
            this.getGemNavItem3TitleForAngular__update();
        }
        return this.getGemNavItem3TitleForAngular__CachedResult;
    }

    public getGemNavItem3TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem3TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem3TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem3TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem3TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem3TitleForAngular__update())
        )).then(__v => this.getGemNavItem3TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem3TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem3Title(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem3Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/SimpleCarList";
        return val_$;
    }

    private getGemNavItem3TargetForAngular__CachedResult: string = undefined;
    public getGemNavItem3TargetForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem3TargetForAngular__CachedResult === undefined) {
            this.getGemNavItem3TargetForAngular__CachedResult = null;
            this.getGemNavItem3TargetForAngular__update();
        }
        return this.getGemNavItem3TargetForAngular__CachedResult;
    }

    public getGemNavItem3TargetForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem3TargetForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem3TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem3TargetForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem3TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem3TargetForAngular__update())
        )).then(__v => this.getGemNavItem3TargetForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem3TargetForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem3Target(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem4Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Customer overview";
        return val_$;
    }

    private getGemNavItem4TitleForAngular__CachedResult: string = undefined;
    public getGemNavItem4TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem4TitleForAngular__CachedResult === undefined) {
            this.getGemNavItem4TitleForAngular__CachedResult = null;
            this.getGemNavItem4TitleForAngular__update();
        }
        return this.getGemNavItem4TitleForAngular__CachedResult;
    }

    public getGemNavItem4TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem4TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem4TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem4TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem4TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem4TitleForAngular__update())
        )).then(__v => this.getGemNavItem4TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem4TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem4Title(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem4Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/CustomerOverview";
        return val_$;
    }

    private getGemNavItem4TargetForAngular__CachedResult: string = undefined;
    public getGemNavItem4TargetForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem4TargetForAngular__CachedResult === undefined) {
            this.getGemNavItem4TargetForAngular__CachedResult = null;
            this.getGemNavItem4TargetForAngular__update();
        }
        return this.getGemNavItem4TargetForAngular__CachedResult;
    }

    public getGemNavItem4TargetForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem4TargetForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem4TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem4TargetForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem4TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem4TargetForAngular__update())
        )).then(__v => this.getGemNavItem4TargetForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem4TargetForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem4Target(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavList1Width(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "40ch";
        return val_$;
    }

    private getGemNavList1WidthForAngular__CachedResult: string = undefined;
    public getGemNavList1WidthForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavList1WidthForAngular__CachedResult === undefined) {
            this.getGemNavList1WidthForAngular__CachedResult = null;
            this.getGemNavList1WidthForAngular__update();
        }
        return this.getGemNavList1WidthForAngular__CachedResult;
    }

    public getGemNavList1WidthForAngular__update(): void {
        
        Promise.resolve(this.getGemNavList1WidthForAngular(
            this.createDomainObserverRegisterFunction('getGemNavList1WidthForAngular__update' + this.computeHash([]), () => this.getGemNavList1WidthForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavList1WidthForAngular__update' + this.computeHash([]), () => this.getGemNavList1WidthForAngular__update())
        )).then(__v => this.getGemNavList1WidthForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavList1WidthForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavList1Width(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavList1Height(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "100vh";
        return val_$;
    }

    private getGemNavList1HeightForAngular__CachedResult: string = undefined;
    public getGemNavList1HeightForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavList1HeightForAngular__CachedResult === undefined) {
            this.getGemNavList1HeightForAngular__CachedResult = null;
            this.getGemNavList1HeightForAngular__update();
        }
        return this.getGemNavList1HeightForAngular__CachedResult;
    }

    public getGemNavList1HeightForAngular__update(): void {
        
        Promise.resolve(this.getGemNavList1HeightForAngular(
            this.createDomainObserverRegisterFunction('getGemNavList1HeightForAngular__update' + this.computeHash([]), () => this.getGemNavList1HeightForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavList1HeightForAngular__update' + this.computeHash([]), () => this.getGemNavList1HeightForAngular__update())
        )).then(__v => this.getGemNavList1HeightForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavList1HeightForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavList1Height(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText7Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Customers";
        return val_$;
    }

    private getGemText7ValueForAngular__CachedResult: string = undefined;
    public getGemText7ValueForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText7ValueForAngular__CachedResult === undefined) {
            this.getGemText7ValueForAngular__CachedResult = null;
            this.getGemText7ValueForAngular__update();
        }
        return this.getGemText7ValueForAngular__CachedResult;
    }

    public getGemText7ValueForAngular__update(): void {
        
        Promise.resolve(this.getGemText7ValueForAngular(
            this.createDomainObserverRegisterFunction('getGemText7ValueForAngular__update' + this.computeHash([]), () => this.getGemText7ValueForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemText7ValueForAngular__update' + this.computeHash([]), () => this.getGemText7ValueForAngular__update())
        )).then(__v => this.getGemText7ValueForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemText7ValueForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemText7Value(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText7Size(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "2rem";
        return val_$;
    }

    private getGemText7SizeForAngular__CachedResult: string = undefined;
    public getGemText7SizeForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText7SizeForAngular__CachedResult === undefined) {
            this.getGemText7SizeForAngular__CachedResult = null;
            this.getGemText7SizeForAngular__update();
        }
        return this.getGemText7SizeForAngular__CachedResult;
    }

    public getGemText7SizeForAngular__update(): void {
        
        Promise.resolve(this.getGemText7SizeForAngular(
            this.createDomainObserverRegisterFunction('getGemText7SizeForAngular__update' + this.computeHash([]), () => this.getGemText7SizeForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemText7SizeForAngular__update' + this.computeHash([]), () => this.getGemText7SizeForAngular__update())
        )).then(__v => this.getGemText7SizeForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemText7SizeForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemText7Size(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText11Value(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "Name:";
        return val_$;
    }

    private getGemText11ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText11ValueForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText11ValueForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemText11ValueForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemText11ValueForAngular__update(customer);
        }
        return this.getGemText11ValueForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemText11ValueForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemText11ValueForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemText11ValueForAngular__update' + this.computeHash([customer]), () => this.getGemText11ValueForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemText11ValueForAngular__update' + this.computeHash([customer]), () => this.getGemText11ValueForAngular__update(customer))
        )).then(__v => this.getGemText11ValueForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText11ValueForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemText11Value(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getNameValue(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false || customer == null){
            return null;
        }
        const val_$: string = customer.getName();
        return val_$;
    }

    private getNameValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getNameValueForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getNameValueForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getNameValueForAngular__CachedResult.set([customer.getGemId()], null);
            this.getNameValueForAngular__update(customer);
        }
        return this.getNameValueForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getNameValueForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getNameValueForAngular(customer,
            this.createDomainObserverRegisterFunction('getNameValueForAngular__update' + this.computeHash([customer]), () => this.getNameValueForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getNameValueForAngular__update' + this.computeHash([customer]), () => this.getNameValueForAngular__update(customer))
        )).then(__v => this.getNameValueForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getNameValueForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getNameValue(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText12Value(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "Email:";
        return val_$;
    }

    private getGemText12ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText12ValueForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText12ValueForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemText12ValueForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemText12ValueForAngular__update(customer);
        }
        return this.getGemText12ValueForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemText12ValueForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemText12ValueForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemText12ValueForAngular__update' + this.computeHash([customer]), () => this.getGemText12ValueForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemText12ValueForAngular__update' + this.computeHash([customer]), () => this.getGemText12ValueForAngular__update(customer))
        )).then(__v => this.getGemText12ValueForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText12ValueForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemText12Value(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getEmailValue(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false || customer == null){
            return null;
        }
        const val_$: string = customer.getEmail();
        return val_$;
    }

    private getEmailValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getEmailValueForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getEmailValueForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getEmailValueForAngular__CachedResult.set([customer.getGemId()], null);
            this.getEmailValueForAngular__update(customer);
        }
        return this.getEmailValueForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getEmailValueForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getEmailValueForAngular(customer,
            this.createDomainObserverRegisterFunction('getEmailValueForAngular__update' + this.computeHash([customer]), () => this.getEmailValueForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getEmailValueForAngular__update' + this.computeHash([customer]), () => this.getEmailValueForAngular__update(customer))
        )).then(__v => this.getEmailValueForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getEmailValueForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getEmailValue(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemText13Value(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "Age:";
        return val_$;
    }

    private getGemText13ValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemText13ValueForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText13ValueForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemText13ValueForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemText13ValueForAngular__update(customer);
        }
        return this.getGemText13ValueForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemText13ValueForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemText13ValueForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemText13ValueForAngular__update' + this.computeHash([customer]), () => this.getGemText13ValueForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemText13ValueForAngular__update' + this.computeHash([customer]), () => this.getGemText13ValueForAngular__update(customer))
        )).then(__v => this.getGemText13ValueForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemText13ValueForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemText13Value(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getAgeValue(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false || customer == null){
            return null;
        }
        const val_$: string = /* valueOf */String(customer.getAge()).toString();
        return val_$;
    }

    private getAgeValueForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getAgeValueForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAgeValueForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getAgeValueForAngular__CachedResult.set([customer.getGemId()], null);
            this.getAgeValueForAngular__update(customer);
        }
        return this.getAgeValueForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getAgeValueForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getAgeValueForAngular(customer,
            this.createDomainObserverRegisterFunction('getAgeValueForAngular__update' + this.computeHash([customer]), () => this.getAgeValueForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getAgeValueForAngular__update' + this.computeHash([customer]), () => this.getAgeValueForAngular__update(customer))
        )).then(__v => this.getAgeValueForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getAgeValueForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getAgeValue(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemGrid10Width(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "auto";
        return val_$;
    }

    private getGemGrid10WidthForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemGrid10WidthForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemGrid10WidthForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemGrid10WidthForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemGrid10WidthForAngular__update(customer);
        }
        return this.getGemGrid10WidthForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemGrid10WidthForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemGrid10WidthForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemGrid10WidthForAngular__update' + this.computeHash([customer]), () => this.getGemGrid10WidthForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemGrid10WidthForAngular__update' + this.computeHash([customer]), () => this.getGemGrid10WidthForAngular__update(customer))
        )).then(__v => this.getGemGrid10WidthForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemGrid10WidthForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemGrid10Width(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemGrid10ColGap(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "5px";
        return val_$;
    }

    private getGemGrid10ColGapForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemGrid10ColGapForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemGrid10ColGapForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemGrid10ColGapForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemGrid10ColGapForAngular__update(customer);
        }
        return this.getGemGrid10ColGapForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemGrid10ColGapForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemGrid10ColGapForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemGrid10ColGapForAngular__update' + this.computeHash([customer]), () => this.getGemGrid10ColGapForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemGrid10ColGapForAngular__update' + this.computeHash([customer]), () => this.getGemGrid10ColGapForAngular__update(customer))
        )).then(__v => this.getGemGrid10ColGapForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemGrid10ColGapForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemGrid10ColGap(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemGrid10RowGap(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "5px";
        return val_$;
    }

    private getGemGrid10RowGapForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemGrid10RowGapForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemGrid10RowGapForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemGrid10RowGapForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemGrid10RowGapForAngular__update(customer);
        }
        return this.getGemGrid10RowGapForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemGrid10RowGapForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemGrid10RowGapForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemGrid10RowGapForAngular__update' + this.computeHash([customer]), () => this.getGemGrid10RowGapForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemGrid10RowGapForAngular__update' + this.computeHash([customer]), () => this.getGemGrid10RowGapForAngular__update(customer))
        )).then(__v => this.getGemGrid10RowGapForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemGrid10RowGapForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemGrid10RowGap(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow9ColGap(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "20px";
        return val_$;
    }

    private getGemRow9ColGapForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow9ColGapForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow9ColGapForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemRow9ColGapForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemRow9ColGapForAngular__update(customer);
        }
        return this.getGemRow9ColGapForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemRow9ColGapForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemRow9ColGapForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemRow9ColGapForAngular__update' + this.computeHash([customer]), () => this.getGemRow9ColGapForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemRow9ColGapForAngular__update' + this.computeHash([customer]), () => this.getGemRow9ColGapForAngular__update(customer))
        )).then(__v => this.getGemRow9ColGapForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemRow9ColGapForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemRow9ColGap(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow9VAlign(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "bottom";
        return val_$;
    }

    private getGemRow9VAlignForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow9VAlignForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow9VAlignForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemRow9VAlignForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemRow9VAlignForAngular__update(customer);
        }
        return this.getGemRow9VAlignForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemRow9VAlignForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemRow9VAlignForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemRow9VAlignForAngular__update' + this.computeHash([customer]), () => this.getGemRow9VAlignForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemRow9VAlignForAngular__update' + this.computeHash([customer]), () => this.getGemRow9VAlignForAngular__update(customer))
        )).then(__v => this.getGemRow9VAlignForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemRow9VAlignForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemRow9VAlign(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow9HAlign(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false){
            return null;
        }
        const val_$: string = "space-between";
        return val_$;
    }

    private getGemRow9HAlignForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getGemRow9HAlignForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow9HAlignForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getGemRow9HAlignForAngular__CachedResult.set([customer.getGemId()], null);
            this.getGemRow9HAlignForAngular__update(customer);
        }
        return this.getGemRow9HAlignForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getGemRow9HAlignForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getGemRow9HAlignForAngular(customer,
            this.createDomainObserverRegisterFunction('getGemRow9HAlignForAngular__update' + this.computeHash([customer]), () => this.getGemRow9HAlignForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getGemRow9HAlignForAngular__update' + this.computeHash([customer]), () => this.getGemRow9HAlignForAngular__update(customer))
        )).then(__v => this.getGemRow9HAlignForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getGemRow9HAlignForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getGemRow9HAlign(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public getCustomerInfoTitle(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        if (false || customer == null){
            return null;
        }
        const val_$: string = customer.getName();
        return val_$;
    }

    private getCustomerInfoTitleForAngular__CachedResult: ManyKeysMap<any, string> = new ManyKeysMap()
    public getCustomerInfoTitleForAngular__ChangeDetection(customer: Customer): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getCustomerInfoTitleForAngular__CachedResult.get([customer.getGemId()]) === undefined) {
            this.getCustomerInfoTitleForAngular__CachedResult.set([customer.getGemId()], null);
            this.getCustomerInfoTitleForAngular__update(customer);
        }
        return this.getCustomerInfoTitleForAngular__CachedResult.get([customer.getGemId()]);
    }

    public getCustomerInfoTitleForAngular__update(customer: Customer): void {
        
        Promise.resolve(this.getCustomerInfoTitleForAngular(customer,
            this.createDomainObserverRegisterFunction('getCustomerInfoTitleForAngular__update' + this.computeHash([customer]), () => this.getCustomerInfoTitleForAngular__update(customer)),
            this.createStateVarObserverRegisterFunction('getCustomerInfoTitleForAngular__update' + this.computeHash([customer]), () => this.getCustomerInfoTitleForAngular__update(customer))
        )).then(__v => this.getCustomerInfoTitleForAngular__CachedResult.set([customer.getGemId()], __v === undefined ? null : __v));
    }

    /*private*/ getCustomerInfoTitleForAngular(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        __regObsToDomainObj(customer);
        return this.getCustomerInfoTitle(customer, __regObsToDomainObj, __regObsToStateVar);
    }

    public async getIt8Iterable(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Customer>> {
        if (false){
            return null;
        }
        return (await GemListUtil.toArraySync(__regObsToStateVar(await this.getCustomers(__regObsToDomainObj, __regObsToStateVar), "_customers")));
    }

    private getIt8IterableForAngular__CachedResult: Array<Customer> = undefined;
    public getIt8IterableForAngular__ChangeDetection(): Array<Customer> {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getIt8IterableForAngular__CachedResult === undefined) {
            this.getIt8IterableForAngular__CachedResult = null;
            this.getIt8IterableForAngular__update();
        }
        return this.getIt8IterableForAngular__CachedResult;
    }

    public getIt8IterableForAngular__update(): void {
        
        Promise.resolve(this.getIt8IterableForAngular(
            this.createDomainObserverRegisterFunction('getIt8IterableForAngular__update' + this.computeHash([]), () => this.getIt8IterableForAngular__update()),
            this.createStateVarObserverRegisterFunction('getIt8IterableForAngular__update' + this.computeHash([]), () => this.getIt8IterableForAngular__update())
        )).then(__v => this.getIt8IterableForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ async getIt8IterableForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<Array<Customer>> {
        return GemListUtil.toArraySync<any>((await GemListUtil.toArraySync((await this.getIt8Iterable(__regObsToDomainObj, __regObsToStateVar)))));
    }

    public getGemColumn6RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "10px";
        return val_$;
    }

    private getGemColumn6RowGapForAngular__CachedResult: string = undefined;
    public getGemColumn6RowGapForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn6RowGapForAngular__CachedResult === undefined) {
            this.getGemColumn6RowGapForAngular__CachedResult = null;
            this.getGemColumn6RowGapForAngular__update();
        }
        return this.getGemColumn6RowGapForAngular__CachedResult;
    }

    public getGemColumn6RowGapForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn6RowGapForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn6RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn6RowGapForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn6RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn6RowGapForAngular__update())
        )).then(__v => this.getGemColumn6RowGapForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn6RowGapForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn6RowGap(__regObsToDomainObj, __regObsToStateVar);
    }

    public getAgeDistribtionData(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemPieChartData {
        if (false){
            return null;
        }
        const val_$: GemPieChartData = __regObsToStateVar(this.getChartData(__regObsToDomainObj, __regObsToStateVar), "_chartData");
        return val_$;
    }

    private getAgeDistribtionDataForAngular__CachedResult: GemPieChartData = undefined;
    public getAgeDistribtionDataForAngular__ChangeDetection(): GemPieChartData {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getAgeDistribtionDataForAngular__CachedResult === undefined) {
            this.getAgeDistribtionDataForAngular__CachedResult = null;
            this.getAgeDistribtionDataForAngular__update();
        }
        return this.getAgeDistribtionDataForAngular__CachedResult;
    }

    public getAgeDistribtionDataForAngular__update(): void {
        
        Promise.resolve(this.getAgeDistribtionDataForAngular(
            this.createDomainObserverRegisterFunction('getAgeDistribtionDataForAngular__update' + this.computeHash([]), () => this.getAgeDistribtionDataForAngular__update()),
            this.createStateVarObserverRegisterFunction('getAgeDistribtionDataForAngular__update' + this.computeHash([]), () => this.getAgeDistribtionDataForAngular__update())
        )).then(__v => this.getAgeDistribtionDataForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getAgeDistribtionDataForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): GemPieChartData {
        return this.getAgeDistribtionData(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemCard15Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Customer Age Distribution";
        return val_$;
    }

    private getGemCard15TitleForAngular__CachedResult: string = undefined;
    public getGemCard15TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemCard15TitleForAngular__CachedResult === undefined) {
            this.getGemCard15TitleForAngular__CachedResult = null;
            this.getGemCard15TitleForAngular__update();
        }
        return this.getGemCard15TitleForAngular__CachedResult;
    }

    public getGemCard15TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemCard15TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemCard15TitleForAngular__update' + this.computeHash([]), () => this.getGemCard15TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemCard15TitleForAngular__update' + this.computeHash([]), () => this.getGemCard15TitleForAngular__update())
        )).then(__v => this.getGemCard15TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemCard15TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemCard15Title(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn14RowGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "10px";
        return val_$;
    }

    private getGemColumn14RowGapForAngular__CachedResult: string = undefined;
    public getGemColumn14RowGapForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn14RowGapForAngular__CachedResult === undefined) {
            this.getGemColumn14RowGapForAngular__CachedResult = null;
            this.getGemColumn14RowGapForAngular__update();
        }
        return this.getGemColumn14RowGapForAngular__CachedResult;
    }

    public getGemColumn14RowGapForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn14RowGapForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn14RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn14RowGapForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn14RowGapForAngular__update' + this.computeHash([]), () => this.getGemColumn14RowGapForAngular__update())
        )).then(__v => this.getGemColumn14RowGapForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn14RowGapForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn14RowGap(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemColumn14HAlign(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "top";
        return val_$;
    }

    private getGemColumn14HAlignForAngular__CachedResult: string = undefined;
    public getGemColumn14HAlignForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn14HAlignForAngular__CachedResult === undefined) {
            this.getGemColumn14HAlignForAngular__CachedResult = null;
            this.getGemColumn14HAlignForAngular__update();
        }
        return this.getGemColumn14HAlignForAngular__CachedResult;
    }

    public getGemColumn14HAlignForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn14HAlignForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn14HAlignForAngular__update' + this.computeHash([]), () => this.getGemColumn14HAlignForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn14HAlignForAngular__update' + this.computeHash([]), () => this.getGemColumn14HAlignForAngular__update())
        )).then(__v => this.getGemColumn14HAlignForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn14HAlignForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn14HAlign(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow5HAlign(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "space-between";
        return val_$;
    }

    private getGemRow5HAlignForAngular__CachedResult: string = undefined;
    public getGemRow5HAlignForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow5HAlignForAngular__CachedResult === undefined) {
            this.getGemRow5HAlignForAngular__CachedResult = null;
            this.getGemRow5HAlignForAngular__update();
        }
        return this.getGemRow5HAlignForAngular__CachedResult;
    }

    public getGemRow5HAlignForAngular__update(): void {
        
        Promise.resolve(this.getGemRow5HAlignForAngular(
            this.createDomainObserverRegisterFunction('getGemRow5HAlignForAngular__update' + this.computeHash([]), () => this.getGemRow5HAlignForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemRow5HAlignForAngular__update' + this.computeHash([]), () => this.getGemRow5HAlignForAngular__update())
        )).then(__v => this.getGemRow5HAlignForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemRow5HAlignForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemRow5HAlign(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemRow0ColGap(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "25px";
        return val_$;
    }

    private getGemRow0ColGapForAngular__CachedResult: string = undefined;
    public getGemRow0ColGapForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemRow0ColGapForAngular__CachedResult === undefined) {
            this.getGemRow0ColGapForAngular__CachedResult = null;
            this.getGemRow0ColGapForAngular__update();
        }
        return this.getGemRow0ColGapForAngular__CachedResult;
    }

    public getGemRow0ColGapForAngular__update(): void {
        
        Promise.resolve(this.getGemRow0ColGapForAngular(
            this.createDomainObserverRegisterFunction('getGemRow0ColGapForAngular__update' + this.computeHash([]), () => this.getGemRow0ColGapForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemRow0ColGapForAngular__update' + this.computeHash([]), () => this.getGemRow0ColGapForAngular__update())
        )).then(__v => this.getGemRow0ColGapForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemRow0ColGapForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemRow0ColGap(__regObsToDomainObj, __regObsToStateVar);
    }

    async initIt8Iterable() {
        {
            let array = (await GemListUtil.toArraySync(await this.getCustomers()));
            for(let index = 0; index < array.length; index++) {
                let customer = array[index];
                {
                }
            }
        }
    }

    async initChartData() {
        if (!this._chartDataSetExternally){
        }
        await this.initIt8Iterable();
    }

    async initCustomers() {
        if (!this._customersSetExternally){
            this._customers = (await GemListUtil.toArraySync(await CarrentalManager.getCustomerList()));
        }
        await this.initChartData();
    }

    protected allVarsInited: boolean = false;
    public async init() {
        await CarrentalManager.addObserver(this);
        await CommandManager.executeCommand<any>(new Customer_subscribeManagerEvents());
        await this.initCustomers();
    }

    public async destroy() {
        await CarrentalManager.removeObserver(this);
    }

    public async notifyCustomerDeleted(gemId_$: number) {
    }

    public async notifyCustomerAdded(val_$: Customer) {
    }
}
CustomerOverviewTOP["__class"] = "gui.CustomerOverviewTOP";
CustomerOverviewTOP["__interfaces"] = ["carrental.CarrentalObserver"];




