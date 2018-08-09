import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './routing.module';
import { UserDashboardPage } from './pages/dashboard.page';
import { UserToursPage } from './pages/tours.page';
import { SharedModule } from '../../shared/shared.module';
import { UserLayout } from './layout/user.layout';
import { UserCreateTourPage } from './pages/create-tour.page';
import { UserAccountSettingsPage } from './pages/account-settings.page';
import { UserPersonalBookingsPage } from './pages/personal-bookings';
import { UserBookingHistoryPage } from './pages/booking-history.page';
import { CreateTourFormComponent } from './component/create-tour-form.component';
import { UserTourDetailsPage } from './pages/tour-details.page';
import { UserTourUpdatePage } from './pages/tour-update.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule,
        SharedModule
    ],
    declarations: [
        UserDashboardPage,
        UserAccountSettingsPage,
        UserPersonalBookingsPage,
        UserToursPage,
        UserCreateTourPage,
        UserTourDetailsPage,
        UserTourUpdatePage,
        UserBookingHistoryPage,
        UserLayout,
        CreateTourFormComponent
    ],
    providers: [

    ],
})
export class UserModule { }
