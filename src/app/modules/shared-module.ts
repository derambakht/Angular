import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../components/tools/error-message/error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './custom-material-module';
import { BestCustomerPipe } from '../pipes/best-customer.pipe';
import { NumberToPersianLetterPipe } from '../pipes/number-to-persian-letter.pipe';
import { NationalCodePipe } from '../pipes/national-code.pipe';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ShowAlertDirective } from '../directives/show-alert.directive';
import { RainbowDirective } from '../directives/rainbow.directive';
import { HttpClientModule } from '@angular/common/http';
import { SampleDirective } from '../directives/sample.directive';

@NgModule({
 imports:[
     CommonModule,
     FormsModule, 
     ReactiveFormsModule,
     CustomMaterialModule,
     NgxPermissionsModule.forRoot(),
     HttpClientModule,
    ],
 declarations: [
    ErrorMessageComponent,
    BestCustomerPipe,
    NumberToPersianLetterPipe,
    NationalCodePipe,
    ShowAlertDirective,
    RainbowDirective,
    SampleDirective,
],
exports: [
    ErrorMessageComponent,
    BestCustomerPipe,
    NumberToPersianLetterPipe,
    NationalCodePipe,
    ShowAlertDirective,
    RainbowDirective,
    HttpClientModule,
    SampleDirective,

]
})
export class SharedModule { }
