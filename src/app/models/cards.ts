export class Cards {
  constructor(public id: number,
              public userId: number,
              public name: string,
              public login: string,
              public pass: string,
              public show: boolean = false) {}
}
