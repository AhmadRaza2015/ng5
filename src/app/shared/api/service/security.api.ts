import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http/http.service';

export interface LoginFormPayload {
  username: string;
  password: string;
}

export interface LoginResponsePayload {
  token: string;
}

@Injectable()
export class SecurityApi {
  constructor(private httpService: HttpService) {

  }

  login(form: LoginFormPayload): Observable<LoginResponsePayload> {
    return this.httpService.post('/login_check', form);
  }
}
