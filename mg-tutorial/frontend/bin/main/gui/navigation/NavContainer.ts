/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { StringHelper } from '@umlp/commonj2ts';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export class NavContainer {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = NavContainer.nextId++;

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
            let hash: number = NavContainer.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.navigation.NavContainer" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.navigation.NavContainer" + this.uniqueIdentifier);
        }
    }

    public ngOnDestroy(): void {
        ComponentObserverManager.removeObservers("gui.navigation.NavContainer" + this.uniqueIdentifier);
    }


    protected _router: Router;

    public constructor() {
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
        const val_$: string = "Car overview";
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
        const val_$: string = "/gui/CarOverview";
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

    public getGemNavItem5Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Create car";
        return val_$;
    }

    private getGemNavItem5TitleForAngular__CachedResult: string = undefined;
    public getGemNavItem5TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem5TitleForAngular__CachedResult === undefined) {
            this.getGemNavItem5TitleForAngular__CachedResult = null;
            this.getGemNavItem5TitleForAngular__update();
        }
        return this.getGemNavItem5TitleForAngular__CachedResult;
    }

    public getGemNavItem5TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem5TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem5TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem5TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem5TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem5TitleForAngular__update())
        )).then(__v => this.getGemNavItem5TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem5TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem5Title(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem5Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/CarCreate";
        return val_$;
    }

    private getGemNavItem5TargetForAngular__CachedResult: string = undefined;
    public getGemNavItem5TargetForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem5TargetForAngular__CachedResult === undefined) {
            this.getGemNavItem5TargetForAngular__CachedResult = null;
            this.getGemNavItem5TargetForAngular__update();
        }
        return this.getGemNavItem5TargetForAngular__CachedResult;
    }

    public getGemNavItem5TargetForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem5TargetForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem5TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem5TargetForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem5TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem5TargetForAngular__update())
        )).then(__v => this.getGemNavItem5TargetForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem5TargetForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem5Target(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem6Title(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Customer overview";
        return val_$;
    }

    private getGemNavItem6TitleForAngular__CachedResult: string = undefined;
    public getGemNavItem6TitleForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem6TitleForAngular__CachedResult === undefined) {
            this.getGemNavItem6TitleForAngular__CachedResult = null;
            this.getGemNavItem6TitleForAngular__update();
        }
        return this.getGemNavItem6TitleForAngular__CachedResult;
    }

    public getGemNavItem6TitleForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem6TitleForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem6TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem6TitleForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem6TitleForAngular__update' + this.computeHash([]), () => this.getGemNavItem6TitleForAngular__update())
        )).then(__v => this.getGemNavItem6TitleForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem6TitleForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem6Title(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemNavItem6Target(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "/gui/CustomerOverview";
        return val_$;
    }

    private getGemNavItem6TargetForAngular__CachedResult: string = undefined;
    public getGemNavItem6TargetForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemNavItem6TargetForAngular__CachedResult === undefined) {
            this.getGemNavItem6TargetForAngular__CachedResult = null;
            this.getGemNavItem6TargetForAngular__update();
        }
        return this.getGemNavItem6TargetForAngular__CachedResult;
    }

    public getGemNavItem6TargetForAngular__update(): void {
        
        Promise.resolve(this.getGemNavItem6TargetForAngular(
            this.createDomainObserverRegisterFunction('getGemNavItem6TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem6TargetForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemNavItem6TargetForAngular__update' + this.computeHash([]), () => this.getGemNavItem6TargetForAngular__update())
        )).then(__v => this.getGemNavItem6TargetForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemNavItem6TargetForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemNavItem6Target(__regObsToDomainObj, __regObsToStateVar);
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

    public getGemColumn7HAlign(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "center";
        return val_$;
    }

    private getGemColumn7HAlignForAngular__CachedResult: string = undefined;
    public getGemColumn7HAlignForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemColumn7HAlignForAngular__CachedResult === undefined) {
            this.getGemColumn7HAlignForAngular__CachedResult = null;
            this.getGemColumn7HAlignForAngular__update();
        }
        return this.getGemColumn7HAlignForAngular__CachedResult;
    }

    public getGemColumn7HAlignForAngular__update(): void {
        
        Promise.resolve(this.getGemColumn7HAlignForAngular(
            this.createDomainObserverRegisterFunction('getGemColumn7HAlignForAngular__update' + this.computeHash([]), () => this.getGemColumn7HAlignForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemColumn7HAlignForAngular__update' + this.computeHash([]), () => this.getGemColumn7HAlignForAngular__update())
        )).then(__v => this.getGemColumn7HAlignForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemColumn7HAlignForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemColumn7HAlign(__regObsToDomainObj, __regObsToStateVar);
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

    protected allVarsInited: boolean = false;
    public init() {
    }

    public destroy() {
    }
}
NavContainer["__class"] = "gui.navigation.NavContainer";



