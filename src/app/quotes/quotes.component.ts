import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'Quotes';

  quotes = [
    new Quotes(1, '"It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going."','Author - Brian Tracy','Submitted by: Phil', new Date(2005,3,14) ),
    new Quotes(2, '"Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small."','Author - Tim Ferriss','Submitted by: Paul', new Date(1991,2,25) ),
    new Quotes(3,  '“The Person Who Says It Cannot Be Done Should Not Interrupt The Person Who Is Doing It.”','Author - Chinese Proverb','Submitted by: Paula', new Date(2011,7,7) ),
    new Quotes(4,  '“Everything You’ve Ever Wanted Is On The Other Side Of Fear.”','Author - George Addair','Submitted by: Georgina', new Date(2017,6,17) ),
    new Quotes(5, '“The Only Place Where Success Comes Before Work Is In The Dictionary.”','Author - Vidal Sassoon','Submitted by: Naomi', new Date(2018,0,29) ),
    new Quotes(6, '“All Our Dreams Can Come True If We Have The Courage To Pursue Them”','Author - Walt Disney','Submitted by: George', new Date(2019,3,19) ),
    new Quotes(7, '"Never fear shadows. They simply mean there is a light shining somewhere nearby."','Author - Ruth Renkel','Submitted by: Max', new Date(2018,7,30) ),

]
toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

deleteQuote(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`You sure you wanna delete ${this.quotes[index].name}?`)

      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}

addNewQuotes(quotes){
  let quotesLength = this.quotes.length;
  quotes.id=quotesLength+1;
  quotes.dateAdded = new Date(quotes.dateAdded)
  this.quotes.push(quotes)

}

  constructor() { }

  ngOnInit() {
  }

}
