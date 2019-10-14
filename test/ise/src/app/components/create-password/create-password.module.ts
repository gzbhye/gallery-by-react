import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePasswordRoutingModule } from './create-password-routing.module';
import { CreatePasswordComponent } from './create-password.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CreatePasswordComponent],
  imports: [
    CommonModule,
    CreatePasswordRoutingModule,
    SharedModule
  ]
})
export class CreatePasswordModule { }
