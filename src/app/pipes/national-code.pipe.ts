import { Pipe, PipeTransform } from '@angular/core';
import { NationalCodeService } from '../services/common/national-code.service';
import { PersianNumberService } from '../services/common/persian-number.service';

@Pipe({
  name: 'nationalCode'
})
export class NationalCodePipe implements PipeTransform {

  constructor(private nationalCodeService: NationalCodeService, 
    private persianNumberService: PersianNumberService) { }

  transform(nationalCode: string): boolean {
      try {
          let number = this.persianNumberService.toEngNumber(nationalCode);
          let natCode = number.toString();

          while (natCode.length < 10)
              natCode = "0" + natCode;

          return this.nationalCodeService.isValid(natCode);
      } catch (e) {
          return false;
      }

  }

}