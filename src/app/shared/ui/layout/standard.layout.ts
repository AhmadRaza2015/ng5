import { OnInit, Component } from '@angular/core';
import { SessionService } from '../../security/session.service';
import { SessionDetails } from '../../security/model/session.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard.layout.html',
})
export class StandardLayout implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private sessionService: SessionService) {

  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.sessionService.isLoggedIn();
  }

  logout(): void {
    this.sessionService.logout();
  }
}
