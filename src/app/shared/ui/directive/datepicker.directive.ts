import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements AfterViewInit {
  constructor(private el: ElementRef, private control: NgControl) {

  }

  ngAfterViewInit(): void {
    const picker = $(this.el.nativeElement).datepicker();
    picker.on('changeDate', () =>  {
      const date = picker.datepicker('getFormattedDate');
      this.control.control.setValue(date);
    });
  }
}

