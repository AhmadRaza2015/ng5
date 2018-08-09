
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { createRegisterForm } from '../form/register.form';
import { AccountApi } from '../../../shared/api/service/account.api';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
})

export class RegisterFormComponent implements OnInit {
    registerForm: FormGroup;
    error: { [message: string]: string };
    success: { [message: string]: string };
    submitted: boolean = false;

    constructor(private api: AccountApi) {

    }

    ngOnInit(): void {
        this.registerForm = createRegisterForm();
    }

    get formControl() { return this.registerForm.controls; }

    onSubmit(): void {

        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        if (this.registerForm.value.password !== this.registerForm.value.plainPassword) {
            return;
        }

        const successHandler = response => { this.success = { message: 'You have successfully registered.' }; };
        const errorHandler = response => { this.error = { message: response.message }; };

        this.api.register(this.registerForm.value).subscribe(successHandler, errorHandler);
    }
}
