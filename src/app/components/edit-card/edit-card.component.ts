import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CardService} from '../../services/card.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

class Cards {
  constructor(public id: number = ( new Date() ).getTime(),
              public name: string,
              public login: string,
              public pass: string,
              public src: string,
              public show: boolean = false) {}
}

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditCardComponent implements OnInit {
  id: number;
  private sub: any;
  card = [];
  cards = [];
  existingCards: Cards[] = [];
  constructor(private cardService: CardService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }
  ngOnInit() {
    this.getCard();

  }
  getCard() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.card = this.cardService.cards
      .filter( card => {
        return card.id === this.id;
      });
    let card = this.card;
    localStorage.setItem('card', JSON.stringify({card}));
  }

  save(myForm: NgForm){
    console.log(myForm.value.id);
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
    console.log(this.existingCards);
    this.router.navigate(['/']);
  }

}
