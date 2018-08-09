import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardLayout } from '../../shared/ui/layout/standard.layout';
import { ForgotPasswordPage } from './pages/forgot-password.page';
import { ResetPasswordPage } from './pages/reset-password.page';

const routes: Routes = [
  {
    path: 'forgot-password',
    component: StandardLayout,
    children: [
      { path: '', component: ForgotPasswordPage },
      { path: 'reset', component: ResetPasswordPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordRoutingModule {}
