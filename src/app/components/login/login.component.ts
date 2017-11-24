import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from '../../models/users';
import {UserService} from '../../services/user.service';

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
    private userService: UserService) { }

  ngOnInit() {
    localStorage.removeItem('currentUser');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(username, password) {
    this.userService.loginUser(username, password);
  }
}
