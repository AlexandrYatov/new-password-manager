import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CardService} from '../../services/card.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import { Cards } from '../../models/cards';

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
    this.card = this.cardService.getAllCards()
      .filter( card => {
        return card.id === this.id;
      });
    let card = this.card;
    localStorage.setItem('card', JSON.stringify({card}));
  }

  save(myForm: NgForm){
    this.cardService.saveCard(myForm);
  }

}
