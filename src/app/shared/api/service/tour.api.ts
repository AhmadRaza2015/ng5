import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { makeCollectionListing } from '../../../client/tour/model/listing.model';
import { map } from 'rxjs/operators';

export interface CreateTourFormPayload {
  title: string;
  description: string;
  shortDescription: string;
}

@Injectable()
export class TourApi {
  constructor(private httpService: HttpService) {

  }

  createTour(form: CreateTourFormPayload): Observable<any> {
    return this.httpService.post('/tour', form);
  }

  getTours() {
    const createListing = map((data: Response )=> {
      data.json();
      // makeCollectionListing(data)
    });

    return this.httpService.post('/tour/list').pipe(
        createListing
    );
  }
}
