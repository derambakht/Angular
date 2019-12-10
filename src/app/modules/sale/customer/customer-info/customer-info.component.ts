import { Component,  ViewChild, AfterViewInit,ViewChildren, QueryList } from '@angular/core';
import { Customer } from 'src/app/models/sale/Customer';
import { CustomerService } from 'src/app/services/sale/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerAddressComponent } from '../customer-address/customer-address.component';
import { CustomerAddress } from 'src/app/models/sale/CustomerAddress';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements AfterViewInit {

  customer:Customer;
  editMode:boolean = false;
  customerAddress: CustomerAddress;

  @ViewChild(CustomerAddressComponent, {static: false}) child;

  @ViewChildren('address') addressComponents:QueryList<CustomerAddressComponent>;
   
  constructor(private customerService: CustomerService, private router: Router, private route:ActivatedRoute) {
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params.id);
    this.customer = new Customer(0, '', '', '');
    if(this.route.snapshot.params.id){
      this.editMode = true;
      const id = parseInt(this.route.snapshot.params.id);
      this.customer = this.customerService.getById(id);
    }

   }


  ngAfterViewInit() {
    this.customerAddress = this.child.customerAddress;
    console.log("this.customerAddress");
    console.log(this.customerAddress);
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

    console.log("ViewChildren this.addressComponents.toArray()");
    console.log(this.addressComponents.toArray());

    console.log("ViewChild ");
    console.log(this.child);

    return;

    this.customerAddress = this.child.customerAddress;
    console.log("this.customerAddress");
    console.log(this.customerAddress);

    console.log("customer");

    console.log(this.customer);
    return;
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
