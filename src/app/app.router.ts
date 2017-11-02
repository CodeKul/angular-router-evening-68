import { RegistrationComponent } from './registration/registration.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash/:usNm', component: DashComponent },
    { path: 'reg/:tm', component: RegistrationComponent }
];

export const AppRouter = RouterModule.forRoot(routes);
