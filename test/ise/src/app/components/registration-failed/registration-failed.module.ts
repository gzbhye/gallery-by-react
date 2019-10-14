import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationFailedRoutingModule } from './registration-failed-routing.module';
import { RegistrationFailedComponent } from './registration-failed.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RegistrationFailedComponent],
  imports: [
    CommonModule,
    RegistrationFailedRoutingModule,
    SharedModule
  ]
})
export class RegistrationFailedModule { }
