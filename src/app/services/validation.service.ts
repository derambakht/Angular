import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
 
  constructor() { }
 
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
 
    let config = {
        'required': 'مقدار اجباری است',
        'email': 'فرمت فیلد ' + validatorName + ' صحیح نمی باشد',
        'minLength': `حداقل طول ${validatorValue.requiredLength} کاراکتر`,
        'invalidPassword': 'رمز عبور باید حداقل 6 کاراکتر باشد',
        'invalidNumber': 'مقدار عددی وارد کنید',
        'invalidMatch': `مقدار کد و تکرار آن باید یکی باشد`
 
    };
 
    return config[validatorName];
  }
  
  static number(control: FormControl) {
    if (control.value.match(/^[0-9]*$/)) {
        return null;
    } else {
        return { 'invalidNumber': true };
    }
  }

  static password(control: FormControl) {
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&amp;*]{6,100}$/)) {
        return null;
    } else {
        return { 'invalidPassword': true };
    }
  }
 
  static match(controlName: string, matchingControlName: string) {
 
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
 
      if (matchingControl.errors && !matchingControl.errors.invalidMatch) {
          return;
      }
 
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ invalidMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
  }
}