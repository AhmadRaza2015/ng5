import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardLayout } from '../../shared/ui/layout/standard.layout';
import { ContactPage } from './contact.page';


const routes: Routes = [
  {
    path: 'contact',
    component: StandardLayout,
    children: [
      { path: '', component: ContactPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingPage {}
