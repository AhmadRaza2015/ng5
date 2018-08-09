
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { createTourForm } from '../form/create-tour.form';
import { TourApi } from '../../../shared/api/service/tour.api';

@Component({
  selector: 'create-tour-form',
  templateUrl: './create-tour-form.component.html',
})

export class CreateTourFormComponent implements OnInit {
  createTourForm: FormGroup;
  submitted = false;

  constructor(private tourApi: TourApi) {

  }

  ngOnInit(): void {
    this.createTourForm = createTourForm();

    this.addAvailableDate();
  }

  addAvailableDate(): void {
    const control = <FormArray>this.createTourForm.controls.tourDates;

    const formGroup = new FormGroup({
      dateFrom: new FormControl('', [
        Validators.required,
      ]),
      dateTo: new FormControl('', [
        Validators.required
      ]),
    });

    control.push(formGroup);
  }

  onSubmit(): void {
    const successHandler = (response) => {

    };

    const errorHandler = (response) => {};

    this.tourApi.createTour(this.createTourForm.value).subscribe(successHandler, errorHandler);
  }
}
