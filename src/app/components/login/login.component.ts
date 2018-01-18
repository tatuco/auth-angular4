import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  constructor(private router: Router, private auth: AuthService) { }

  onLogin(): void {
    this.auth.login(this.user)
      .then((user) => {
        localStorage.setItem('access_token', user.json().access_token);
        localStorage.setItem('status', user.json().status);
        this.router.navigateByUrl('/status');
      })
      .catch((err) => {
        console.log(err);
      });

    this.auth.login(this.user)
      .then((user) => {
        console.log(user.json());
      })
      .catch((err) => {
        console.log(err);
    });
  }
}
/*const postData = {
  grant_type: 'password',
  client_id: 2,
  client_secret: 'ouUZQuryBk9X3HAjk5yAR0rcwZzeZ8C3KqR8nnjX',
  email: 'sysadmin@tatuco.com',
  password: '123456',
  scope: ''
}*/
