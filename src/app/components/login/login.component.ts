import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
    let users = JSON.parse(localStorage.getItem('users')).filter(r => {
      if (r.username === username && r.password === password) {
        localStorage.setItem('currentUser', JSON.stringify( { username: username, password: password } ));
        this.router.navigate([this.returnUrl]);
      } else {
        this.router.navigate(['/register']);
      }
    });

  }
}
