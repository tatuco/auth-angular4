import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { LoginRedirect } from './services/login-redirect.service';
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
      { path: 'register', component: RegisterComponent, canActivate: [LoginRedirect] },
      { path: 'status', component: StatusComponent, canActivate: [EnsureAuthenticatedService] }
    ])
  ],
  providers: [
    AuthService,
    EnsureAuthenticatedService,
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
