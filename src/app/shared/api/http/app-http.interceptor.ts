import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionService } from '../../security/session.service';
import { SessionDetails } from '../../security/model/session.model';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router, private sessionService: SessionService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = this.router.url;
    const successHandler = response => {};
    const errorHandler = (error): any => {
      if (error instanceof HttpErrorResponse ) {
        if (error.status === 401) {
          // If we receive 401 and we aren't on the login page redirecto to login.
          if  (url.indexOf('/login') === -1) {
            this.router.navigate(['/login']);
          }
        }
      }
    };

    // Add JWT to request if the session is present
    this.sessionService.getSession().subscribe(session => {
      if (session) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + session.token
          }
        });
      }
    });

    return next.handle(request).pipe(
      tap(successHandler, errorHandler),
    );
  }
}

