
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { createLoginForm } from '../form/login.form';
import { SessionService } from '../../../shared/security/session.service';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  error: { [message: string]: string };

  constructor(private sessionService: SessionService) {

  }

  ngOnInit(): void {
    this.loginForm = createLoginForm();
  }

  onSubmit(): void {
    // Just reset form error on success. SessionService would take care the redirection
    const successHandler = response => { this.error = {}; };
    const errorHandler = response => { this.error = { message: response.error.message }; };

    this.sessionService.login(this.loginForm.value).subscribe(successHandler, errorHandler);
  }
}
