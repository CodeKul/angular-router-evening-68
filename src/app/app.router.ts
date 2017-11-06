import { AccountNumGuard } from './dash/account-num.guard';
import { ListingComponent } from './dash/listing.component';
import { ProfileComponent } from './dash/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const dashRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'list', component: ListingComponent }
];

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash/:usNm', component: DashComponent, children: dashRoutes },
    { path: 'reg/:tm', component: RegistrationComponent, canActivate: [AccountNumGuard] },
    { path: '**', redirectTo: '' }
];

export const AppRouter = RouterModule.forRoot(routes);
