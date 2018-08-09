import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

export interface RegisterFormPayload {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
}

export interface RequestPasswordFormPayload {
    email: string;
}

export interface ResetPasswordFormPayload {
    token: string;
    password: string;
}

export interface RegisterResponsePayload {
    token: string;
}

export interface RequestPasswordResponsePayload {
    token: string;
}

export interface ResetPasswordResponsePayload {
    token: string;
}

@Injectable()
export class AccountApi {
    constructor(private httpService: HttpService) {

    }

    register(form: RegisterFormPayload): Observable<RegisterResponsePayload> {
        return this.httpService.post('/register', form);
    }

    requestPassword(form: RequestPasswordFormPayload): Observable<RequestPasswordResponsePayload> {
        return this.httpService.post('/request-password', form);
    }

    resetPassword(form: ResetPasswordFormPayload): Observable<ResetPasswordResponsePayload> {
        console.log(form);
        return this.httpService.post('/reset-password', form);
    }
}
