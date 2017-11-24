import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Cards} from '../models/cards';
import {Users} from '../models/users';


@Injectable()
export class CardService {

  id: any;
  private sub: any;
  card = [];
  cards = [];
  currentUserId: Users[] = [];
  existingCards: Cards[] = [];
  public formSubmitted: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  getAllCards() {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.cards = JSON.parse(localStorage.getItem('allCards'));
    if ( this.cards ) {
      return this.cards.filter( r => {
        return r.userId === this.currentUserId;
      });
    }
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


  addCard(myForm) {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.existingCards = JSON.parse(localStorage.getItem('allCards'));

    if ( !this.existingCards ) {
      this.existingCards = [];
    }

    myForm.value.id = ( new Date() ).getTime();
    myForm.value.userId = this.currentUserId;
    myForm.value.show = false;
    let card = myForm.value;

    this.formSubmitted = true;

    localStorage.setItem('card', JSON.stringify({card}));
    this.existingCards.push(card);
    localStorage.setItem('allCards', JSON.stringify(this.existingCards));
    this.router.navigate(['/']);
  }

  saveCard(myForm) {

    this.existingCards = JSON.parse(localStorage.getItem('allCards'));
    if ( !this.existingCards ) {
      this.existingCards = [];
    }
    this.existingCards.forEach( (card, cardId ) => {
      if (card.id === myForm.value.id) {
        this.existingCards[cardId] = myForm.value;
      }
    });
    localStorage.setItem('allCards', JSON.stringify( this.existingCards ));
    this.router.navigate(['/']);
  }

}
