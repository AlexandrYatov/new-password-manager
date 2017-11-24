export class Users {
  constructor(public id: number,
              public firstName: string,
              public lastName: string,
              public username: string,
              public password: string,
              public loading: boolean = false) {}
}
