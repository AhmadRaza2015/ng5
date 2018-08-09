import { FormGroup, FormControl, Validators } from '@angular/forms';

export function createForgotPasswordForm(): FormGroup {
  return new FormGroup({
    'email': new FormControl('', [
        Validators.required,
        Validators.email
    ]),
  });
}

export default createForgotPasswordForm();
