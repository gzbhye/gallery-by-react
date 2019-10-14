import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivationExpiredComponent } from './activation-expired.component';

const routes: Routes = [
  {
    path: '',
    component: ActivationExpiredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivationExpiredRoutingModule { }
