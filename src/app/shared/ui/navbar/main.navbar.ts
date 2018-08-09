import { OnInit, Component } from '@angular/core';
import {Observable} from 'rxjs/index';
import {SessionService} from '../../security/session.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main.navbar.html',
})
export class MainNavbar implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private sessionService: SessionService) {

  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.sessionService.isLoggedIn();
  }

  logout(): void {
  }
}
