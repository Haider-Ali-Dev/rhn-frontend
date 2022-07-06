import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

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
