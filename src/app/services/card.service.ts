import { Injectable } from '@angular/core';

@Injectable()
export class CardService {

  constructor() { }

  cards = JSON.parse(localStorage.getItem('allCards'));

}
