export class Cards {
  constructor(public id: number = ( new Date() ).getTime(),
              public name: string,
              public login: string,
              public pass: string,
              public show: boolean = false) {}
}
