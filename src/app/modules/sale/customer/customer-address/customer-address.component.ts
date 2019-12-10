import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CustomerAddress } from 'src/app/models/sale/CustomerAddress';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {

  //error

  customerAddress:CustomerAddress;
  @Input() info:CustomerAddress;
  @Output() save = new EventEmitter<CustomerAddress>(); 

  constructor() { }

  ngOnInit() {
    this.customerAddress = this.info;
  }

  saveData(){
    this.save.emit(this.customerAddress);
  }

}
