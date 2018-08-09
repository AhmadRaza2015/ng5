import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './routing.module';
import { LoginFormComponent } from './component/form.component';
import { LoginPage } from './login.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ],
  declarations: [
    LoginPage,
    LoginFormComponent
  ],
})
export class LoginModule { }
