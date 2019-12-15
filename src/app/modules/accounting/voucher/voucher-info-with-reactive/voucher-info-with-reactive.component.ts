import { Component, OnInit } from '@angular/core';
import { Voucher } from 'src/app/models/accounting/Voucher';
import { VoucherDetail } from 'src/app/models/accounting/VoucherDetail';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-voucher-info-with-reactive',
  templateUrl: './voucher-info-with-reactive.component.html',
  styleUrls: ['./voucher-info-with-reactive.component.css']
})
export class VoucherInfoWithReactiveComponent implements OnInit {

  voucherForm;
 
  //@ViewChildren('detail') details:QueryList<VoucherDetailInfoComponent>;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    var detailsArray = [];
    detailsArray.push(this.generateDetail(new VoucherDetail()));

    this.voucherForm = this.fb.group({
      code: ['', [Validators.required, ValidationService.number]],
      confirmCode: ['', [Validators.required, ValidationService.number]],
      title: ['', Validators.required],
      description: [''],
      details: this.fb.array(detailsArray)
    }, {
      validator: [
        ValidationService.match('code', 'confirmCode'),
      ]
    });
  }

  generateDetail(data:VoucherDetail): FormGroup {
    return this.fb.group({
      rowNumber: [data.rowNumber, Validators.required],
      kol: [data.kol, Validators.required],
      moein: [data.moein, Validators.required],
      taf: [data.taf, Validators.required]
    })
  }

  addNewRow() {
    const item = this.generateDetail(new VoucherDetail());
    console.log(this.voucherForm.controls.details);
    this.voucherForm.controls.details.push(item);
    //this.detailsArray.push(item);
  }

  save(){
    console.log(this.voucherForm);
    // if(this.voucherForm.touched && this.voucherForm.isValid){
    //   console.log(this.voucherForm);
    //   alert();
    // }
  
  }

}
