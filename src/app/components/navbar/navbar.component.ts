import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
