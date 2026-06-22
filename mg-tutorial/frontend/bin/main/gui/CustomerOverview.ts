/* Generated from Java with JSweet 3.2.2-UMLP-SNAPSHOT - http://www.jsweet.org */
import { CarrentalManager } from 'carrental/CarrentalManager';
import { CarrentalObserver } from 'carrental/CarrentalObserver';
import { Customer } from 'carrental/Customer';
import { EmptyCarrentalObserver } from 'carrental/EmptyCarrentalObserver';
import { GemPieChartData } from '@umlp/charts';
import { GemPieChartEntryBuilder } from '@umlp/charts';
import { Component } from '@angular/core';
import { CustomerOverviewTOP } from './CustomerOverviewTOP';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentObserverManager } from '@umlp/commonj2ts';
import { CustomerOverviewComponent, config } from 'gui/CustomerOverviewComponent';
import { OnDestroy } from '@angular/core';
import { GemListUtil } from '@umlp/commonj2ts';

@Component({
    standalone: true,
    imports: [...config.imports],
    selector: config.selector,
    templateUrl: config.templateUrl,
    styles: config.styles,
    styleUrls: [...config.styleUrls]
})
export class CustomerOverview extends CustomerOverviewComponent implements OnDestroy {
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        ComponentObserverManager.removeObservers("gui.CustomerOverview" + this.uniqueIdentifier);
    }

    obs: CarrentalObserver;

    /**
     * 
     */
    public async init() {
        await super.init();
        this.obs = new CustomerOverview.CustomerOverview$0(this);
        await CarrentalManager.addObserver(this.obs);
        await this.updateAgeDistribution();
    }

    /**
     * 
     */
    public async destroy() {
        await super.destroy();
        await CarrentalManager.removeObserver(this.obs);
    }

    public async updateAgeDistribution() {
        const customers: Array<Customer> = (await GemListUtil.toArraySync(await this.getCustomers()));
        if (customers == null){
            this.setChartData(null);
            return;
        }
        let below25: number = 0;
        let other: number = 0;
        let over60: number = 0;
        for(let index = 0; index < customers.length; index++) {
            let customer = customers[index];
            {
                const age: number = customer.getAge();
                if (age <= 25)below25++; else if (age < 60)other++; else over60++;
            }
        }
        const data: GemPieChartData = new GemPieChartData();
        data.addEntries(/* orElseThrow */(v => { if (v == null) throw new Error('value is null'); return v; })(new GemPieChartEntryBuilder().value(below25).label("25 and below").build()));
        data.addEntries(/* orElseThrow */(v => { if (v == null) throw new Error('value is null'); return v; })(new GemPieChartEntryBuilder().value(other).label("other").build()));
        data.addEntries(/* orElseThrow */(v => { if (v == null) throw new Error('value is null'); return v; })(new GemPieChartEntryBuilder().value(over60).label("60 and older").build()));
        this.setChartData(data);
    }

    constructor() {
        super();
        if (this.obs === undefined) { this.obs = null; }
    }
}
CustomerOverview["__class"] = "gui.CustomerOverview";
CustomerOverview["__interfaces"] = ["carrental.CarrentalObserver"];



export namespace CustomerOverview {

    export class CustomerOverview$0 extends EmptyCarrentalObserver {
        public __parent: any;
        /**
         * 
         * @param {Customer} customer
         */
        public async notifyCustomerAdded(customer: Customer) {
            await this.__parent.updateAgeDistribution();
        }

        /**
         * 
         * @param {number} gemId
         */
        public async notifyCustomerDeleted(gemId: number) {
            await this.__parent.updateAgeDistribution();
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    CustomerOverview$0["__interfaces"] = ["carrental.CarrentalObserver"];


}



