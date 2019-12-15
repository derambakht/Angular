import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestCustomer'
})
export class BestCustomerPipe implements PipeTransform {
  transform(customers: any, grade:number = 1): any {
    return customers.filter(item => item.grade >= grade);
  }
}
