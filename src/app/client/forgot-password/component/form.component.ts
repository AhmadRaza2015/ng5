
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AccountApi } from '../../../shared/api/service/account.api';
import { createForgotPasswordForm } from '../form/forgot-password.form';

@Component({
  selector: 'forgot-password-form',
  templateUrl: './form.component.html',
})

export class ForgotPasswordFormComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  error: { [message: string]: string };
  success: { [message: string]: string };
  submitted: boolean = false;

  constructor(private api: AccountApi) {

  }

  ngOnInit(): void {
      this.forgotPasswordForm = createForgotPasswordForm();
  }

  get formControl() { return this.forgotPasswordForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.forgotPasswordForm.invalid) {
      return;
    }

    const successHandler = response => { this.success = { message: 'We have successfully sent you an email to reset your password.' }; };
    const errorHandler = response => { this.error = { message: 'Account not found.' }; };

    this.api.requestPassword(this.forgotPasswordForm.value).subscribe(successHandler, errorHandler);
  }
}
