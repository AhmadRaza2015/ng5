import { FormGroup, FormControl, Validators } from '@angular/forms';

export function createResetPasswordForm(): FormGroup {
    return new FormGroup({
        'token': new FormControl('', [
            Validators.required,
        ]),
        'password': new FormControl('', [
            Validators.required,
        ]),
    });
}

export default createResetPasswordForm();
