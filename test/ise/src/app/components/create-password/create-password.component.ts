import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PublicService } from '../../services/public.service';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  public tokenId: any;
  public tokenData: any;
  public login: any;
  public tokenExpired = false;
  public formModel: FormGroup;
  public confirmPasswordError: boolean;
  public reg: any = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    public publicService: PublicService
  ) {
    // this.formModel = new FormGroup({       // 表单对象
    //   NewPassword: new FormControl(),
    //   RetypePassword: new FormControl()
    // });
    this.formModel = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      retypePassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.tokenId = this.route.snapshot.params.token;
    console.log(this.tokenId);
    this.route.params.subscribe((data) => {
      console.log(data);
    });
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
    // this.validateToken();
  }
  validateToken() {
    this.tokenData = {
      token: this.tokenId,
      supplemental: true
    };
    if (!!this.tokenId) {
      // this.router.navigate(['/activation-expired'])
    }
    this.formService.authToken(this.tokenData).subscribe(
      (response) => {
        const results: any = response;
        if (results && results.success) {
          const data = results.data;
          const user = data._embedded.user;
          this.login = user.profile.login;
        } else {
          this.router.navigate(['/activation-expired']);
        }
      },
      (error) => {
        this.router.navigate(['/activation-expired']);
      }
    );
  }

  isFieldValid(field: string) {
    if (field === 'retypePassword') {
      const confirmPassword = this.formModel.get(field).value;
      if (confirmPassword < 8) {
        this.confirmPasswordError = false;
      }
    }
    return !this.reg.test(this.formModel.get(field).value) && this.formModel.get(field).touched;
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
  onSubmit() {
    if (this.formModel.value) {
      console.log(34245);
      const newPassword = this.formModel.value.newPassword;
      const retypePassword = this.formModel.value.retypePassword;
      console.log(newPassword === retypePassword);
      if ((newPassword.length > 7 && retypePassword.length > 7) && (newPassword !== retypePassword)) {
        this.confirmPasswordError = true;
        return;
      } else {
        this.confirmPasswordError = false;
      }
    }
    if (this.formModel.valid) {
      // this.showLoader = true;
      // //provisionApp value
      // let provisionApp = [];
      // if(this.appIdentifier === '1') {
      //   provisionApp = ['ACOM'];
      // }

      // postData
      const postData = {
        userName: this.login,
        profile: {
          PROVISION_APP: 'provisionApp'
        },
        credentials: {
          password: {
            value: this.formModel.value.password
          }
        }
      };
      this.formService.setPassword(this.formModel.value).subscribe((res) => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/login']);
        }
      }, (errordata) => {
        console.log(errordata);
      });
    } else {
      this.validateAllFormFields(this.formModel);
    }
  }
}
