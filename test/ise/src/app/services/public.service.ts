import { Injectable } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PublicService {
  public isHide = false;
  public isShow = true;
  public inputType: any = 'password';
  public showText = 'Show';
  constructor() { }
  showPassword() {
    this.isShow ? (
      this.isHide = true,
      this.isShow = false,
      this.inputType = 'text',
      this.showText = 'Hide'
    ) : (
        this.isHide = false,
        this.isShow = true,
        this.inputType = 'password',
        this.showText = 'Show'
      );
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
