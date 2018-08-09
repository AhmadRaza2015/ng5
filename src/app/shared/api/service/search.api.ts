import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

export interface SearchTourFormPayload {
  title: string;
}

@Injectable()
export class SearchApi {
  constructor(private httpService: HttpService) {

  }

  searchTour(form: SearchTourFormPayload): Observable<any> {
    return this.httpService.post('/search', form);
  }
}
