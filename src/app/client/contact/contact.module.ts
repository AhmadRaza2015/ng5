import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactRoutingPage } from './routing.module';
import { ContactPage } from './contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingPage
  ],
  declarations: [
    ContactPage
  ],
})
export class ContactModule { }
