import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Cards} from '../models/cards';


@Injectable()
export class CardService {

  id: any;
  private sub: any;
  card = [];
  cards = [];
  existingCards: Cards[] = [];
  public formSubmitted: boolean = false;

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


  getEditCard() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
     this.card = this.getAllCards()
      .filter( card => {
        return card.id === this.id;
      });
  }

  addCard(myForm) {
    this.existingCards = JSON.parse(localStorage.getItem('allCards'));

    if ( !this.existingCards ) {
      this.existingCards = [];
    }

    myForm.value.id = ( new Date() ).getTime();
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
