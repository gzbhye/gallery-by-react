import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationFailedComponent } from './registration-failed.component';

const routes: Routes = [
  {
    path:'',
    component:RegistrationFailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationFailedRoutingModule { }
