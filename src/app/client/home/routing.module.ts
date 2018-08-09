import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardLayout } from '../../shared/ui/layout/standard.layout';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: StandardLayout,
    children: [
      { path: '', component: HomePage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingPage {}
