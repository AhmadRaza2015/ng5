import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ForgotPasswordModule } from './client/forgot-password/forgot-password.module';
import { NotFoundPage } from './shared/ui/page/not-found.page';
import { AboutModule } from './client/about/about.module';
import { RegisterModule } from './client/register/register.module';
import { HomeModule } from './client/home/home.module';
import { LoginModule } from './client/login/login.module';
import { ContactModule } from './client/contact/contact.module';
import { TourModule } from './client/tour/tour.module';
import { UserModule } from './client/user/user.module';
import { HomePage } from './client/home/home.page';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: HomePage },
  { path: '**', component: NotFoundPage },
];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'SPA_Master' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    SharedModule,
    LoginModule,
    ForgotPasswordModule,
    RegisterModule,
    HomeModule,
    AboutModule,
    ContactModule,
    TourModule,
    UserModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
