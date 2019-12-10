import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/base/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] = [];
  constructor() { }

  getAll(){
    return this.products;
  }

  getById(id:number){
    return this.products.find(q => q.id == id);
  }

  add(item:Product){
    this.products.push(item);
  }
}
