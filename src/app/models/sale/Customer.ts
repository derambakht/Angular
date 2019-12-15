import { CustomerAddress } from './CustomerAddress';

export class Customer{
    constructor(
       public id:number,
       public firstName:string,
       public lastName:string,
       public customerCode:string,
       public grade:number = 1,
       public addressList: CustomerAddress[] = []
    ){}
}


// export class Customer{
//     id:number;
//     firstName:string;
//     lastName:string;
//     customerCode:string;
// }