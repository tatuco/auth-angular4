import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService  {
  private BASE_URL = 'http://localhost:8000';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'});
  constructor(private http: Http) { }
  login(user: User): Promise<any> {
    const url: string = this.BASE_URL + '/login';
    user['client_secret'] = environment.client_secret;
    user['client_id'] = environment.client_id;
    user['grant_type'] = environment.grant_type;

    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    const url: string = this.BASE_URL + '/register';
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  ensureAuthenticated(token): Promise<any> {
    const url: string = this.BASE_URL + '/status';
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
  logout(user: User, token): Promise<any> {
    const url: string = this.BASE_URL + '/logout';
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(url, user, {headers: headers}).toPromise();
  }
}
