import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './component/form.component';
import { RegisterRoutingPage } from './routing.module';
import { RegisterPage } from './register.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingPage
  ],
  declarations: [
    RegisterPage,
    RegisterFormComponent
  ],
})
export class RegisterModule { }
