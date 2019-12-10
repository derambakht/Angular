import { Component, OnInit } from '@angular/core';
import { Voucher } from 'src/app/models/accounting/Voucher';
import { VoucherDetail } from 'src/app/models/accounting/VoucherDetail';
import { FormBuilder, Validators } from '@angular/forms';

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
    this.voucherForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', Validators.required],
      description: [''],
      // features: this.fb.array(arr)
    });
  }

  addNewRow() {
    //this.voucherInfo.voucherDetails.push(new VoucherDetail());
  }

  save(){
    if(this.voucherForm.touched && this.voucherForm.isValid){
      console.log(this.voucherForm);
      alert();
    }
  
  }

}
