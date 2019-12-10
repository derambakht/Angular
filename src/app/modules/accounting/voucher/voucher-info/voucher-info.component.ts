import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Voucher } from 'src/app/models/accounting/Voucher';
import { VoucherDetailInfoComponent } from '../../voucher-detail/voucher-detail-info/voucher-detail-info.component';
import { VoucherDetail } from 'src/app/models/accounting/VoucherDetail';

@Component({
  selector: 'app-voucher-info',
  templateUrl: './voucher-info.component.html',
  styleUrls: ['./voucher-info.component.css']
})
export class VoucherInfoComponent implements OnInit {
  voucherInfo:Voucher = new Voucher();
  @ViewChildren('detail') details:QueryList<VoucherDetailInfoComponent>;

  constructor() { }

  ngOnInit() {
  }

  addNewRow() {
    this.voucherInfo.voucherDetails.push(new VoucherDetail());
  }

  save(){
    console.log('ViewChildren');
    console.log(this.details);
    //console.log(this.voucherInfo);
  }

}
