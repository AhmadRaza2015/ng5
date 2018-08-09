import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SessionService } from './session.service';

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private sessionService: SessionService) {

  }

  canActivate() {
    this.sessionService.isLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.sessionService.requireLogin();
      }
    });

    return true;
  }
}
