import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

export function createTourForm(): FormGroup {
  return new FormGroup({
    title: new FormControl('', [
      Validators.required,
    ]),
    details: createDetailForm(),
    price: new FormControl('', [
      Validators.required,
    ]),
    tourDates: new FormArray([])
  });
}

export function createTourDatesForm(): FormGroup {
  return new FormGroup({
    dateFrom: new FormControl('', [
      Validators.required,
    ]),
    dateTo: new FormControl('', [
      Validators.required,
    ]),
  });
}

export function createDetailForm(): FormGroup {
  return new FormGroup({
    description: new FormControl('', [
      Validators.required,
    ]),
    shortDescription: new FormControl('', [
      Validators.required,
    ]),
  });
}

export default createTourForm();
