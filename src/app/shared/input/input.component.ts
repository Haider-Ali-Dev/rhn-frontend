import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeholder = '';
  @Input() control = new FormControl();
  @Input() type = "text"
  constructor() { }

  ngOnInit(): void {
  }

}

