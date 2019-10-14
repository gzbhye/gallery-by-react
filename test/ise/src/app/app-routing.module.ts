import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'registration', loadChildren: './components/registration/registration.module#RegistrationModule' },
  { path: 'confirm-account', loadChildren: './components/confirm-account/confirm-account.module#ConfirmAccountModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'registration-failed', loadChildren: './components/registration-failed/registration-failed.module#RegistrationFailedModule' },
  { path: 'create-password', loadChildren: './components/create-password/create-password.module#CreatePasswordModule' },
  { path: 'activation-expired', loadChildren: './components/activation-expired/activation-expired.module#ActivationExpiredModule' },
  // tslint:disable-next-line: max-line-length
  { path: '**', redirectTo: '/registration' },
];
@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
