import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'voucher-detail-info-with-reactive',
  templateUrl: './voucher-detail-info-with-reactive.component.html',
  styleUrls: ['./voucher-detail-info-with-reactive.component.css']
})
export class VoucherDetailInfoWithReactiveComponent implements OnInit {

  @Input() info:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
