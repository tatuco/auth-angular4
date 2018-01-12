import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from '../models/user';

@Injectable()
export class AuthService  {
  private BASE_URL = 'http://localhost:8500';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': '*'});
  constructor(private http: Http) { }
  login(user): Promise<any> {
    const url: string = this.BASE_URL + '/login';
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    const url: string = this.BASE_URL + '/register';
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}
