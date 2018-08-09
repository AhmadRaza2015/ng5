import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AboutRoutingPage } from './routing.module';
import { AboutPage } from './about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutRoutingPage
  ],
  declarations: [
    AboutPage
  ],
})
export class AboutModule { }
