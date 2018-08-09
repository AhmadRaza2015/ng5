import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardLayout } from '../../shared/ui/layout/standard.layout';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: 'login',
    component: StandardLayout,
    children: [
      { path: '', component: LoginPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
