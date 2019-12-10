import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherListComponent } from './voucher/voucher-list/voucher-list.component';
import { VoucherInfoComponent } from './voucher/voucher-info/voucher-info.component';
import { VoucherInfoWithReactiveComponent } from './voucher/voucher-info-with-reactive/voucher-info-with-reactive.component';


const routes: Routes = [
  {path:'vouchers', component:VoucherListComponent},
  {path:'vouchers/add', component:VoucherInfoComponent},
  {path:'vouchers/addReactive', component:VoucherInfoWithReactiveComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
