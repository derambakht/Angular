import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/sale/Customer';
import { CustomerAddress } from 'src/app/models/sale/CustomerAddress';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers : Customer[] = [];
  
  constructor() { 
    const addressInfo = new CustomerAddress();
    addressInfo.address = "tehran"
    addressInfo.tel = "22114455"
    addressInfo.sort = 1;
    addressInfo.id = 101;

    this.customers.push(new Customer(1, "ali", "rezaei", "0323236359", 3));
    this.customers.push(new Customer(2, "reza", "amini", "0022114455", 2));
    this.customers.push(new Customer(3, "mona", "karimi", "8855441122", 4));
    this.customers.push(new Customer(4, "omid", "yavari", "1144552233", 5));
    this.customers[0].addressList.push(addressInfo);
  }

  getAll(){
    return this.customers;
  }

  getById(id:number){
    console.log('getById');
    return this.customers.find(q => q.id == id);
  }
  
  add(item:Customer){
    this.customers.push(item);
  }

  update(item:Customer){
    const index = this.customers.findIndex(q => q.id == item.id);
    this.customers[index] = item;
  }



}
