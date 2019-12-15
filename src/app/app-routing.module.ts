import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartSampleComponent } from './components/chart-sample/chart-sample.component';
import { MaterialSampleFormComponent } from './components/dynamic-forms-sample/material-sample-form.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent , //outlet:"outlet1"
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./modules/sale/sale.module').then(m => m.SaleModule)
  },
  {
    path: 'dynamicform', component : MaterialSampleFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
