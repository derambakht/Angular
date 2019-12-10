import { Injectable } from '@angular/core';
import { Voucher } from 'src/app/models/accounting/Voucher';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  voucherList : Voucher[] = [];

  constructor() { }

  getAll() {
    return this.voucherList;
  }

  add(item:Voucher) {
    this.voucherList.push(item);
  }
}
