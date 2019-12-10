import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/sale/Customer';
import { CustomerService } from 'src/app/services/sale/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerAddress } from 'src/app/models/sale/CustomerAddress';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer:Customer;
  editMode:boolean = false;
   
  constructor(private customerService: CustomerService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params.id);
    this.customer = new Customer(0, '', '', '');
    if(this.route.snapshot.params.id){
      this.editMode = true;
      const id = parseInt(this.route.snapshot.params.id);
      this.customer = this.customerService.getById(id);
    }
  }

  addAddressInfo(){
    const addressInfo = new CustomerAddress();
    addressInfo.id = this.customer.addressList.length + 1;
    this.customer.addressList.push(addressInfo);
  }

  saveAddress(addressInfo){
    console.log(event);
    const index = this.customer.addressList.findIndex(q => q.id == addressInfo.id);
    this.customer.addressList[index] = addressInfo;
  }

  saveData(){
    console.log(this.customer);
    if(this.route.snapshot.params.id){
      this.customer.id = parseInt(this.route.snapshot.params.id);
      //update
      this.customerService.update(this.customer)
    } else {
      //insert
      this.customerService.add(this.customer);
    }
   
    this.router.navigate(["/sale"]);
  }
}
