import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../components/tools/error-message/error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './custom-material-module';
import { BestCustomerPipe } from '../pipes/best-customer.pipe';
import { NumberToPersianLetterPipe } from '../pipes/number-to-persian-letter.pipe';
import { NationalCodePipe } from '../pipes/national-code.pipe';

@NgModule({
 imports:[
     CommonModule,
     FormsModule, 
     ReactiveFormsModule,
     CustomMaterialModule
    ],
 declarations: [
    ErrorMessageComponent,
    BestCustomerPipe,
    NumberToPersianLetterPipe,
    NationalCodePipe
],
exports: [
    ErrorMessageComponent,
    BestCustomerPipe,
    NumberToPersianLetterPipe,
    NationalCodePipe
]
})
export class SharedModule { }
