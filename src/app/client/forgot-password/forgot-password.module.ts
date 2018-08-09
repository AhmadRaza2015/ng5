import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgotPasswordFormComponent } from './component/form.component';
import { ForgotPasswordRoutingModule } from './routing.module';
import { ForgotPasswordPage } from './pages/forgot-password.page';
import { SharedModule } from '../../shared/shared.module';
import { ResetPasswordPage } from './pages/reset-password.page';
import { ResetPasswordFormComponent } from './component/reset-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ForgotPasswordRoutingModule
  ],
  declarations: [
    ForgotPasswordPage,
    ResetPasswordPage,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,
  ],
})
export class ForgotPasswordModule { }
