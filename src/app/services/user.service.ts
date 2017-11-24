import { Injectable } from '@angular/core';
import {Users} from '../models/users';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  loading = false;
  existingUsers: Users[] = [];
  public formSubmitted: boolean = false;
  constructor(
    private router: Router) { }
  users = JSON.parse(localStorage.getItem('users'));

  registerUser(myForm) {
    this.existingUsers = JSON.parse(localStorage.getItem('users'));

    if ( !this.existingUsers ) {
      this.existingUsers = [];
    }

    myForm.value.id = ( new Date() ).getTime();
    myForm.value.loading = false;
    let user = myForm.value;

    this.formSubmitted = true;

    this.existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(this.existingUsers));

    this.router.navigate(['/login']);
  }

  loginUser(username, password) {
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
