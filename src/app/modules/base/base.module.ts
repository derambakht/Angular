import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from "@ag-grid-community/angular";

import { BaseRoutingModule } from './base-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CustomMaterialModule } from '../custom-material-module';
import { ProductFeatureComponent } from './product-feature/product-feature.component';


@NgModule({
  declarations: [ProductListComponent, ProductInfoComponent, ProductFeatureComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BaseRoutingModule
  ]
})
export class BaseModule { }
