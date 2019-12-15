import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { VoucherListComponent } from './voucher/voucher-list/voucher-list.component';
import { VoucherInfoComponent } from './voucher/voucher-info/voucher-info.component';
import { VoucherDetailInfoComponent } from './voucher-detail/voucher-detail-info/voucher-detail-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoucherInfoWithReactiveComponent } from './voucher/voucher-info-with-reactive/voucher-info-with-reactive.component';
import { VoucherDetailInfoWithReactiveComponent } from './voucher-detail/voucher-detail-info-with-reactive/voucher-detail-info-with-reactive.component';
import { CustomMaterialModule } from '../custom-material-module';
import { SharedModule } from '../shared-module';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [VoucherListComponent, VoucherInfoComponent, VoucherDetailInfoComponent, 
    VoucherInfoWithReactiveComponent, VoucherDetailInfoWithReactiveComponent],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    SharedModule,
    NgxPermissionsModule.forRoot()
  ]
})
export class AccountingModule { }
