import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmAccountRoutingModule } from './confirm-account-routing.module';
import { ConfirmAccountComponent } from './confirm-account.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ConfirmAccountComponent],
  imports: [
    CommonModule,
    ConfirmAccountRoutingModule,
    SharedModule
  ]
})
export class ConfirmAccountModule { }
