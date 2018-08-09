import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HomeRoutingPage } from './routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingPage
  ],
  declarations: [
    HomePage
  ],
})
export class HomeModule { }
