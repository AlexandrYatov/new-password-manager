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
  



}
