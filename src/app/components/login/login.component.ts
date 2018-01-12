import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public email: any;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    const sampleUser: any = {
      email: 'sysadmin@zippyttech.com' as string,
      password : '123456' as string
    };
    const postData = {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'ouUZQuryBk9X3HAjk5yAR0rcwZzeZ8C3KqR8nnjX',
      email: 'sysadmin@tatuco.com',
      password: '123456',
      scope: ''
    }
   /* this.auth.register(postData)
      .then((user) => {
        console.log(user.json());
      })
      .catch((err) => {
      console.log(err);
      });*/
    console.log(postData);
    this.auth.login(postData)
      .then((user) => {
        console.log(user.json());
      })
      .catch((err) => {
        console.log(err);
    });
  }
}
