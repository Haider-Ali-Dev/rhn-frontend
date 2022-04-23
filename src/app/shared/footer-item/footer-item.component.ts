import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.css']
})
export class FooterItemComponent implements OnInit {
  @Input() itemName = '';
  constructor() { }

  ngOnInit(): void {
  }

}
