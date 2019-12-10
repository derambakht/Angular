import { VoucherDetail } from './VoucherDetail';

export class Voucher{
    id:number;
    title:string;
    code:string;
    description:string;
    voucherDetails: VoucherDetail[] = [];
}