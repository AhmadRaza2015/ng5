import { FormGroup, FormControl, Validators } from '@angular/forms';

export function createLoginForm(): FormGroup {
  return new FormGroup({
    'username': new FormControl('', [
      Validators.required,
    ]),
    'password': new FormControl('', [
      Validators.required,
    ]),
  });
}

export default createLoginForm;
