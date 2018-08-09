import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandardLayout } from '../../shared/ui/layout/standard.layout';
import { UserDashboardPage } from './pages/dashboard.page';
import { UserToursPage } from './pages/tours.page';
import { UserLayout } from './layout/user.layout';
import { UserCreateTourPage } from './pages/create-tour.page';
import { UserTourDetailsPage } from './pages/tour-details.page';
import { UserTourUpdatePage } from './pages/tour-update.page';
import { UserAccountSettingsPage } from './pages/account-settings.page';
import { UserPersonalBookingsPage } from './pages/personal-bookings';
import { UserBookingHistoryPage } from './pages/booking-history.page';
import { JWTGuard } from '../../shared/security/jwt.guard';

const routes: Routes = [
  {
    path: 'user',
    component: StandardLayout,
    canActivate: [ JWTGuard ],
    children: [
      {
        path: '', component: UserLayout,
        children: [
          { path: 'dashboard', component: UserDashboardPage },
          { path: 'account-settings', component: UserAccountSettingsPage },
          { path: 'personal-bookings', component: UserPersonalBookingsPage },
          { path: 'tours', component: UserToursPage },
          { path: 'create-tour', component: UserCreateTourPage },
          { path: 'tour-details', component: UserTourDetailsPage },
          { path: 'tour-update', component: UserTourUpdatePage },
          { path: 'booking-history', component: UserBookingHistoryPage }
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
