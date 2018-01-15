import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  user: User = new User();
  constructor(private auth: AuthService, private router: Router) { }
  onLogout(): void {
    this.auth.logout(this.user,  localStorage.getItem('access_token'))
      .then((user) => {
        localStorage.clear();
        this.router.navigateByUrl('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
