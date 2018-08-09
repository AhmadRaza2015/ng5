import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules
import { UIModule } from './ui/ui.module';

// Services
import { HttpService } from './api/http/http.service';
import { StorageService } from './security/storage.service';
import { SessionService } from './security/session.service';

// API Services
import { AccountApi } from './api/service/account.api';
import { HttpClientModule } from '@angular/common/http';
import { SecurityApi } from './api/service/security.api';
import { TourApi } from './api/service/tour.api';

// Others
import { AppHttpInterceptor } from './api/http/app-http.interceptor';
import { JWTGuard } from './security/jwt.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    UIModule,
  ],
  exports: [
    ReactiveFormsModule,
    UIModule,
  ],
  providers: [
    HttpService,
    SessionService,
    StorageService,

    AccountApi,
    SecurityApi,
    TourApi,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    JWTGuard,
  ]
})
export class SharedModule {

}
