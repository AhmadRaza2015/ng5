import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return {
      validUrl: true
    };
  }
  return null;
}

export function ValidateConfirmPassword(registerForm) {
  let password = '';//registerForm.controls.password.value;
  let passwordConfirm = '';//registerForm.controls.passwordConfirm.value;

  if (passwordConfirm.length <= 0) {
    return null;
  }

  if (passwordConfirm !== password) {
    return {
      match: true
    };
  }

  return null;
}