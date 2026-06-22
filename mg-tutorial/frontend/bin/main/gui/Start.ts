/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { StringHelper } from '@umlp/commonj2ts';
import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import ManyKeysMap from 'many-keys-map';import { GemIdentifiable } from '@umlp/commonj2ts';
import { GemListUtil } from '@umlp/commonj2ts';

@Directive()
export class Start {
    private static nextId: number = 0;
    protected uniqueIdentifier:number = Start.nextId++;

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
            let hash: number = Start.nextHash++;
            this.hashes.set(key, hash);
            return hash;
        }
    }

    protected createDomainObserverRegisterFunction<T extends GemIdentifiable>(updateName: string, update: (() => void)):
        (obj: T) => T {
        return (obj: T) => {
            if (obj != undefined && obj != null) {
                return ComponentObserverManager.addDomainObjectObserver(obj, update.bind(this), updateName, "gui.Start" + this.uniqueIdentifier);
            } else {
                return null;
            }
        }
    }

    protected createStateVarObserverRegisterFunction<T>(updateName: string, update: (() => void)):
        (obj: T, variableName: string) => T {
        return (obj: T, variableName: string) => {
            return ComponentObserverManager.addStateVariableObserver(obj, variableName, update.bind(this), updateName, "gui.Start" + this.uniqueIdentifier);
        }
    }

    public ngOnDestroy(): void {
        ComponentObserverManager.removeObservers("gui.Start" + this.uniqueIdentifier);
    }


    protected _router: Router;

    public constructor() {
    }

    public getGemText0Value(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "This is a tutorial application for developers learning to create a MontiGem app.";
        return val_$;
    }

    private getGemText0ValueForAngular__CachedResult: string = undefined;
    public getGemText0ValueForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemText0ValueForAngular__CachedResult === undefined) {
            this.getGemText0ValueForAngular__CachedResult = null;
            this.getGemText0ValueForAngular__update();
        }
        return this.getGemText0ValueForAngular__CachedResult;
    }

    public getGemText0ValueForAngular__update(): void {
        
        Promise.resolve(this.getGemText0ValueForAngular(
            this.createDomainObserverRegisterFunction('getGemText0ValueForAngular__update' + this.computeHash([]), () => this.getGemText0ValueForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemText0ValueForAngular__update' + this.computeHash([]), () => this.getGemText0ValueForAngular__update())
        )).then(__v => this.getGemText0ValueForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemText0ValueForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemText0Value(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemLink1Url(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "https://monticore.pages.rwth-aachen.de/umlp/Tutorial.html";
        return val_$;
    }

    private getGemLink1UrlForAngular__CachedResult: string = undefined;
    public getGemLink1UrlForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemLink1UrlForAngular__CachedResult === undefined) {
            this.getGemLink1UrlForAngular__CachedResult = null;
            this.getGemLink1UrlForAngular__update();
        }
        return this.getGemLink1UrlForAngular__CachedResult;
    }

    public getGemLink1UrlForAngular__update(): void {
        
        Promise.resolve(this.getGemLink1UrlForAngular(
            this.createDomainObserverRegisterFunction('getGemLink1UrlForAngular__update' + this.computeHash([]), () => this.getGemLink1UrlForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemLink1UrlForAngular__update' + this.computeHash([]), () => this.getGemLink1UrlForAngular__update())
        )).then(__v => this.getGemLink1UrlForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemLink1UrlForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemLink1Url(__regObsToDomainObj, __regObsToStateVar);
    }

    public getGemLink1Text(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        if (false){
            return null;
        }
        const val_$: string = "Visit the tutorial page to learn how to build a MontiGem app.";
        return val_$;
    }

    private getGemLink1TextForAngular__CachedResult: string = undefined;
    public getGemLink1TextForAngular__ChangeDetection(): string {
        if (!this.allVarsInited) {
            return undefined;
        }
        if (this.getGemLink1TextForAngular__CachedResult === undefined) {
            this.getGemLink1TextForAngular__CachedResult = null;
            this.getGemLink1TextForAngular__update();
        }
        return this.getGemLink1TextForAngular__CachedResult;
    }

    public getGemLink1TextForAngular__update(): void {
        
        Promise.resolve(this.getGemLink1TextForAngular(
            this.createDomainObserverRegisterFunction('getGemLink1TextForAngular__update' + this.computeHash([]), () => this.getGemLink1TextForAngular__update()),
            this.createStateVarObserverRegisterFunction('getGemLink1TextForAngular__update' + this.computeHash([]), () => this.getGemLink1TextForAngular__update())
        )).then(__v => this.getGemLink1TextForAngular__CachedResult = __v === undefined ? null : __v);
    }

    /*private*/ getGemLink1TextForAngular(
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): string {
        return this.getGemLink1Text(__regObsToDomainObj, __regObsToStateVar);
    }

    protected allVarsInited: boolean = false;
    public init() {
    }

    public destroy() {
    }
}
Start["__class"] = "gui.Start";



