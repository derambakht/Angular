import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './modules/custom-material-module';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ChartSampleComponent } from './components/chart-sample/chart-sample.component';
import { AccountingModule } from './modules/accounting/accounting.module';
import { ValidationService } from './services/validation.service';
import { MaterialSampleFormComponent } from './components/dynamic-forms-sample/material-sample-form.component';
import { ReactiveFormsModule, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import {
  DYNAMIC_VALIDATORS,
  DynamicFormsCoreModule,
  Validator,
  ValidatorFactory,
  DYNAMIC_MATCHER_PROVIDERS
} from "@ng-dynamic-forms/core";
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { customValidator, customDateRangeValidator, customForbiddenValidator, customAsyncFormGroupValidator } from './components/dynamic-forms-sample/dynamic-form-validators';
import { SharedModule } from './modules/shared-module';
import { RainbowDirective } from './directives/rainbow.directive';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { SampleDirective } from './directives/sample.directive';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    HomeComponent,
    ChartSampleComponent,
    MaterialSampleFormComponent,
    JokeListComponent,
    CategoryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AccountingModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsMaterialUIModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    ValidationService,
    {
      provide: NG_VALIDATORS,
      useValue: customValidator,
      multi: true
  },
  {
      provide: NG_VALIDATORS,
      useValue: customDateRangeValidator,
      multi: true
  },
  {
      provide: NG_ASYNC_VALIDATORS,
      useValue: customAsyncFormGroupValidator,
      multi: true
  },
  {
      provide: DYNAMIC_VALIDATORS,
      useValue: new Map<string, Validator | ValidatorFactory>([
          ["customValidator", customValidator],
          ["customDateRangeValidator", customDateRangeValidator],
          ["customForbiddenValidator", customForbiddenValidator],
          ["customAsyncFormGroupValidator", customAsyncFormGroupValidator]
      ])
  },
  ...DYNAMIC_MATCHER_PROVIDERS,
  {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
          separatorKeyCodes: [13, 188]
      }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
