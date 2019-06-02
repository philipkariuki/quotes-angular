import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quote = [
    new Quotes(1,'This is a test quote'),
    new Quotes(2,'Another test quote'),
    new Quotes(3, 'Yet another test quote'),
    new Quotes(4, 'Who doesn;t love quotes'),
    new Quotes(5, 'I could do this all day'),

]
}


// quote: string[];

//   constructor(){
//     this.quote = ["this is a test quote","another test quote","yet another test quote"];
//   }
