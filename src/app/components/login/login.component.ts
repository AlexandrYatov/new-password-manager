import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from "../../models/users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  users: Users[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // reset login status
    localStorage.removeItem('currentUser');

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(username, password) {
    this.loading = true;
    this.users = JSON.parse(localStorage.getItem('users')).filter(r => {
      return r.username === username && r.password === password;
    })
    if (this.users.length) {
      if (this.users[0].username === username && this.users[0].password === password) {
        localStorage.setItem('currentUser', JSON.stringify( {id: this.users[0].id, username: username, password: password } ));
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/register']);
    }
  }
}
