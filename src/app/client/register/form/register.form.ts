import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateUrl } from '../validation/register.validator';
import { ValidateConfirmPassword } from '../validation/register.validator';

export function createRegisterForm(): FormGroup {
  return new FormGroup({
    'firstName': new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    'lastName': new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ]),
    'plainPassword': new FormControl('', [
      Validators.required,
    ]),
  });
}

export default createRegisterForm;
