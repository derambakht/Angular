import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartSampleComponent } from './components/chart-sample/chart-sample.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
