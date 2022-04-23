import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNavBar() {
    var x = document.getElementById("myTopnav");
    if (x == null) {
      return
    }

    if (x?.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav"
    }
  }
}
