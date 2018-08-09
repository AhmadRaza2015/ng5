import { Component, OnInit } from '@angular/core';
import { TourApi } from '../../../shared/api/service/tour.api';
import { CollectionListing, CollectionSearchParameters } from '../model/listing.model';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing.page.html',
})
export class TourListingPage implements OnInit {
  public colListing: any;
  colParams: CollectionSearchParameters;

  constructor(private api: TourApi) {

  }
  ngOnInit(): void {
    this.getTours();
  }

  getTours() {
    this.api.getTours().subscribe(response => {
      this.colListing = response;
    });
  }
}
