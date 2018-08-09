import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TourRoutingModule } from './routing.module';
import { TourDetailsPage } from './pages/details.page';
import { TourListingPage } from './pages/listing.page';
import { TourCheckoutPage } from './pages/checkout.page';
import { TourComparePage } from './pages/compare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TourRoutingModule,
  ],
  declarations: [
    TourListingPage,
    TourDetailsPage,
    TourCheckoutPage,
    TourComparePage
  ],
  providers: [

  ],
})
export class TourModule { }
