import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { map, tap } from 'rxjs/operators';

import { SecurityApi, LoginFormPayload, LoginResponsePayload } from '../api/service/security.api';
import { SessionDetails } from './model/session.model';
import { StorageService } from './storage.service';


@Injectable()
export class SessionService {
  static STORAGE_KEY = 'tripzeeker-session';

  private session: BehaviorSubject<SessionDetails>;

  constructor(private storage: StorageService, private securityApi: SecurityApi, private router: Router) {
    this.session = new BehaviorSubject(null);
  }

  initialize(): void {
    this.loadSession();
  }

  login(payload: LoginFormPayload): Observable<LoginResponsePayload> {
    const createSession = tap<LoginResponsePayload>(response => {
      const session = new SessionDetails(response.token);
      this.saveSession(session);
    });

    const redirect =  tap<LoginResponsePayload>(response => {
      this.router.navigate(['/user/dashboard']);
    });

    return this.securityApi.login(payload).pipe(
      createSession, redirect
    );
  }

  logout() {
    this.clearSession();
    this.requireLogin();
  }

  requireLogin() {
    this.router.navigate(['/login']);
  }

  saveSession(session: SessionDetails) {
    this.storage.setItem(SessionService.STORAGE_KEY, JSON.stringify(session));
    this.session.next(session);
  }

  getSession(): BehaviorSubject<SessionDetails> {
    return this.session;
  }

  isLoggedIn(): Observable<boolean> {
    const checkIfLoggedIn = map(session => {
      if (session) {
        return true;
      }

      return false;
    });

    return this.session.pipe(
      checkIfLoggedIn
    );
  }

  loadSession() {
    try {
      const storedData = this.storage.getItem(SessionService.STORAGE_KEY);
      if (storedData) {
        this.session.next(new SessionDetails(JSON.parse(storedData)));
      } else {
        this.session.next(null);
      }
    } catch (e) {
      this.storage.removeItem(SessionService.STORAGE_KEY);
    }
  }

  clearSession() {
    this.storage.removeItem(SessionService.STORAGE_KEY);
    this.session.next(null);
  }
}
