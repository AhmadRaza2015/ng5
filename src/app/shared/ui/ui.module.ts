import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StandardLayout } from './layout/standard.layout';
import { NotFoundPage } from './page/not-found.page';
import { MainNavbar } from './navbar/main.navbar';
import { UserMenu } from './menu/user.menu';
import { DatePickerDirective } from './directive/datepicker.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    StandardLayout,
    MainNavbar,
    UserMenu,
    NotFoundPage,
    DatePickerDirective,
  ],
  exports: [
    StandardLayout,
    MainNavbar,
    UserMenu,
    NotFoundPage,
    DatePickerDirective,
  ]
})
export class UIModule {

}
