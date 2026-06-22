/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { CarrentalManager } from 'carrental/CarrentalManager';
import { Customer } from 'carrental/Customer';
import { Component } from '@angular/core';
import { CustomerCreateTOP } from './CustomerCreateTOP';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { CustomerCreateComponent, config } from 'gui/CustomerCreateComponent';
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
export class CustomerCreate extends CustomerCreateComponent implements OnDestroy {
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        ComponentObserverManager.removeObservers("gui.CustomerCreate" + this.uniqueIdentifier);
    }

    /**
     * 
     * @param {Customer} customer
     * @param {String} __regObsToDomainObj
     * @param {String} __regObsToStateVar
     * @return {*}
     */
    public async createCustomer(customer: Customer, 
            __regObsToDomainObj: <T extends GemIdentifiable> (__domainObj: T) => T = __domainObj => __domainObj, 
            __regObsToStateVar: <T> (__stateVar: T, varName: string) => T = (__stateVar, _) => __stateVar): Promise<(p1: void) => void> {
        __regObsToDomainObj(customer);
        return async ($) => {
            __regObsToDomainObj(/* orElseThrow */(v => { if (v == null) throw new Error('value is null'); return v; })((await __regObsToDomainObj(__regObsToDomainObj(__regObsToDomainObj(__regObsToDomainObj((await CarrentalManager.customerBuilder())).name(customer.getName())).email(customer.getEmail())).age(customer.getAge())).build())));
            this.setCustomer(__regObsToDomainObj((await CarrentalManager.customerBuilder())));
        };
    }
}
CustomerCreate["__class"] = "gui.CustomerCreate";



