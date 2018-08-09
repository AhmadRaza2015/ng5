import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// What happened if we switched to prod?
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {

  }

  post(url: string, data?: any): Observable<any> {
    // TODO create full path on HTTPInterceptor
    const fullPath = 'http://172.23.0.2/api' + url;

    return this.http.post(fullPath, data);
  }
}
