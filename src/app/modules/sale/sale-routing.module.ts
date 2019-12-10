import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerInfoComponent } from './customer/customer-info/customer-info.component';


const routes: Routes = [
  {path:'', component : CustomerListComponent},
  {path:'customer/add' , component: CustomerInfoComponent},
  {path:'customer/edit/:id' , component: CustomerInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
