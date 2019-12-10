import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerInfoComponent } from './customer/customer-info/customer-info.component';
import { FormsModule } from '@angular/forms';
import { CustomerAddressComponent } from './customer/customer-address/customer-address.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerInfoComponent, CustomerAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
