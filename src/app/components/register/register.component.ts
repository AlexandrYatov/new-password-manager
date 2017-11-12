import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

class Users {
  constructor(public id: number = ( new Date() ).getTime(),
              public firstName: string,
              public lastName: string,
              public username: string,
              public password: string,
              public loading: boolean = false) {}
}


@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  model: any = {};
  loading = false;
  existingUsers: Users[] = [];
  public formSubmitted: boolean = false;
  constructor(
    private router: Router) { }

  register(myForm: NgForm) {

    this.existingUsers = JSON.parse(localStorage.getItem('users'));

    if ( !this.existingUsers ) {
      this.existingUsers = [];
    }

    myForm.value.id = ( new Date() ).getTime();
    myForm.value.loading = false;
    let user = myForm.value;

    this.formSubmitted = true;

    localStorage.setItem('user', JSON.stringify({user}));
    this.existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(this.existingUsers));

    this.router.navigate(['/login']);
  }
}
