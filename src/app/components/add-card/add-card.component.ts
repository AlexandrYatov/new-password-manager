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
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddCardComponent implements OnInit {
  cards: Cards[];
  existingCards: Cards[] = [];
  public formSubmitted: boolean = false;

  constructor( cardService: CardService,
              private route: ActivatedRoute,
              private router: Router,
               private location: Location) { }

  add(myForm: NgForm){

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
  ngOnInit() {
  }

}
