import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { FormService } from '../../services/form.service';
import { PublicService } from '../../services/public.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public title = 'CrossLab Connect';
  public countryList: any;
  public formModel: FormGroup;

  public publicService: PublicService;
  constructor(
    private formService: FormService,
    private route: Router
  ) {
    // 表单对象
    this.formModel = new FormGroup({
      FirstName: new FormControl(),
      LastName: new FormControl(),
      EmailAddress: new FormControl(),
      PhoneNumbe: new FormControl(),
      CompanyName: new FormControl(),
      CountryName: new FormControl()
    });
  }

  ngOnInit() {
    this.formService.getCountries().subscribe((res) => {
      console.log(res);
      this.countryList = res.data.countries;
    }, (errordata) => {
      console.log(errordata);
    });
    console.log(this.formModel.hasError('required', 'CompanyName'));
  }
  onSubmit() {
    const postData = {
      profile: this.formModel.value
    };
    // this.route.navigate(['/login']);
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.formService.createUser(postData).subscribe((res) => {
        console.log(res);
        if (res.success) {
          this.route.navigate(['/confirm-account']);
        } else if (res.data === '1') {
          this.route.navigate(['/registration-failed', '1']);
        } else if (res.data === '2') {
          this.route.navigate(['/registration-failed', '2']);
        }
      }, (errordata) => {
        console.log(errordata);
      });
    } else {
      this.publicService.validateAllFormFields(this.formModel);
    }
  }
  fieldData(field: string) {
    return this.formModel.get(field);
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
