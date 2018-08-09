import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardLayout } from '../../shared/ui/layout/standard.layout';
import { AboutPage } from './about.page';


const routes: Routes = [
  {
    path: 'about',
    component: StandardLayout,
    children: [
      { path: '', component: AboutPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingPage {}
