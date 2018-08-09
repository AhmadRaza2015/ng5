import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardLayout } from '../../shared/ui/layout/standard.layout';
import { TourListingPage } from './pages/listing.page';
import { TourDetailsPage } from './pages/details.page';
import { TourCheckoutPage } from './pages/checkout.page';
import { TourComparePage } from './pages/compare.page';

const routes: Routes = [
  {
    path: 'tour',
    component: StandardLayout,
    children: [
      { path: '', component: TourListingPage },
      { path: 'tour-details', component: TourDetailsPage },
      { path: 'checkout', component: TourCheckoutPage },
      { path: 'compare', component: TourComparePage }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourRoutingModule {}
