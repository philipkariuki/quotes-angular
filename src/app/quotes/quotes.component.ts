import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote = [
    new Quotes(1,'This is a test quote'),
    new Quotes(2,'Another test quote'),
    new Quotes(3, 'Yet another test quote'),
    new Quotes(4, 'Who doesn;t love quotes'),
    new Quotes(5, 'I could do this all day'),

]

  constructor() { }

  ngOnInit() {
  }

}
