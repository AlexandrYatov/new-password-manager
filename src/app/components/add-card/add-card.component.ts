import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CardService} from '../../services/card.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import { Cards } from '../../models/cards';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddCardComponent implements OnInit {
  cards: Cards[];
  existingCards: Cards[] = [];

  constructor(private cardService: CardService,
              private route: ActivatedRoute,
              private router: Router,
               private location: Location) { }

  add(myForm: NgForm) {
    this.cardService.addCard(myForm);
  }
  ngOnInit() {
  }

}
