import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../../services/user.service';


@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  model: any = {};
  constructor(
    private userService: UserService) { }

  register(myForm: NgForm) {
    this.userService.registerUser(myForm);
  }
}
