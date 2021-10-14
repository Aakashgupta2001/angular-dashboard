import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logOut() {
    console.log('Logged Out');
  }
}