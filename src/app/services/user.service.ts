import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  users = JSON.parse(localStorage.getItem('users'));
}
