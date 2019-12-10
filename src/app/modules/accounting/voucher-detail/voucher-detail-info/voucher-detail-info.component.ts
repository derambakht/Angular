import { Component, OnInit, Input } from '@angular/core';
import { VoucherDetail } from 'src/app/models/accounting/VoucherDetail';

@Component({
  selector: 'voucher-detail-info',
  templateUrl: './voucher-detail-info.component.html',
  styleUrls: ['./voucher-detail-info.component.css']
})
export class VoucherDetailInfoComponent implements OnInit {

  @Input() detailInfo: VoucherDetail;
  constructor() { }

  ngOnInit() {
  }

}
