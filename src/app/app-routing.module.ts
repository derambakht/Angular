import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartSampleComponent } from './components/chart-sample/chart-sample.component';
import { MaterialSampleFormComponent } from './components/dynamic-forms-sample/material-sample-form.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CategoryListComponent } from './components/category-list/category-list.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent , //outlet:"outlet1"
  },
  {
    path:'categories', component: CategoryListComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule)
  },
  {
    path: 'sale',
    data: {
      permissions: {
        except: 'ADMIN',
        redirectTo: '/products'
      }
    },
    canLoad: [NgxPermissionsGuard],
    loadChildren: () => import('./modules/sale/sale.module').then(m => m.SaleModule)
  },
  {
    path: 'dynamicform', component : MaterialSampleFormComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'ADMIN',
        redirectTo: '/'
      }
    }
  },
  // {
  //   path:'**', component: PageNotFound 
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
