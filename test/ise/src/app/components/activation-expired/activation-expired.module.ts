import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationExpiredRoutingModule } from './activation-expired-routing.module';
import { ActivationExpiredComponent } from './activation-expired.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ActivationExpiredComponent],
  imports: [
    CommonModule,
    ActivationExpiredRoutingModule,
    SharedModule
  ]
})
export class ActivationExpiredModule { }
