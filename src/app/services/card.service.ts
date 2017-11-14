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

  getAllCards() {
    let cards = JSON.parse(localStorage.getItem('allCards'));
    return cards;
  }
  toggleShow(card) {
    return card.show = !card.show;
  }

  deleteCard(card) {
    this.cards = this.getAllCards();
    let index = this.cards.indexOf(card);
    if (index = -1) {
      let returnCards = this.cards.splice(index, 1);
      localStorage.setItem('allCards', JSON.stringify(this.cards));
    }
    this.getAllCards();
    return this.cards;
  }


  getEditCard(id) {
    this.card = this.getAllCards()
      .filter( card => {
        return card.id === id;
      });
    return this.card;
  }


}
