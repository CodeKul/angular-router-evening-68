import { AccountNumGuard } from './dash/account-num.guard';
import { AppRouter } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './dash/profile.component';
import { ListingComponent } from './dash/listing.component';
import { ReactiveRegComponent } from './reactive-reg/reactive-reg.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustPipe } from './pipes/cust.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    RegistrationComponent,
    ProfileComponent,
    ListingComponent,
    ReactiveRegComponent,
    PipesComponent,
    CustPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountNumGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
