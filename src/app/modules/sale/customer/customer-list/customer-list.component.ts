import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/sale/Customer';
import { CustomerService } from 'src/app/services/sale/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[] = [];
  price = 1500;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getAll();
  }

}
