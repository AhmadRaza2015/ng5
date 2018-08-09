
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AccountApi } from '../../../shared/api/service/account.api';
import { createResetPasswordForm } from '../form/reset-password.form';

@Component({
  selector: 'reset-password-form',
  templateUrl: './reset-form.component.html',
})

export class ResetPasswordFormComponent implements OnInit {
  resetPasswordForm: FormGroup;
  error: { [message: string]: string };
  success: { [message: string]: string };
  submitted: boolean = false;

  constructor(private api: AccountApi) {

  }

  ngOnInit(): void {
      this.resetPasswordForm = createResetPasswordForm();
  }

  get formControl() { return this.resetPasswordForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }

    const successHandler = response => { this.success = { message: 'Reset password success.' }; };
    const errorHandler = response => { this.error = { message: 'Invalid reset code.' }; };

    this.api.resetPassword(this.resetPasswordForm.value).subscribe(successHandler, errorHandler);
  }
}
