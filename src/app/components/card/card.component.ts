import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CardService} from '../../services/card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  cards = [];
  constructor(private cardService: CardService) { }
  ngOnInit() {
    this.getCards();
  }
  getCards() {
    this.cards = this.cardService.getAllCards();
  }

  toggle(card) {
    this.cardService.toggleShow(card);
  }
  delete(card) {
    this.cardService.deleteCard(card);
    this.getCards();
  }

}
