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
    this.getAllCards();
  }
  getAllCards(){
    this.cards = this.cardService.getCards();
  }

  toggle(card){
    card.show = !card.show;
  }
  delete(card) {
    let index = this.cards.indexOf(card);

    if (index > -1) {
      this.cards.splice(index, 1);
    }
    // this.cardService.deleteCard(card);
    localStorage.setItem('allCards', JSON.stringify(this.cards));
    this.cardService.getCards();
  }

}
