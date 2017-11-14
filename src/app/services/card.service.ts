import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';


@Injectable()
export class CardService {

  id: number;
  private sub: any;
  card = [];
  cards = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  getCards(){
    let cards = JSON.parse(localStorage.getItem('allCards'));
    return cards;
  }

  deleteCard(card) {
    let index = this.getCards().indexOf(card);
    if (index > -1) {
      this.getCards().splice(index, 1);
      localStorage.setItem('allCards', JSON.stringify( this.getCards() ));
    }
    console.log(card);
    console.log( this.getCards() )

    return card;
  }



}
