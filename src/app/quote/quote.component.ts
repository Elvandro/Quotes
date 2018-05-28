import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.","Francis of Assisi","Elvis", new Date(2018,5.26),0,0),
    new Quote("Put your heart, mind, and soul into even your smallest acts. This is the secret of success.","Swami Sivananda","Sanaipei",new Date(2018,5,25),0,0),
    new Quote("Happiness is not something you postpone for the future; it is something you design for the present.","Jim Rohn","Lacosta", new Date(2018,5,24),0,0)
  ]
  createNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.dateCreated = new Date();
    this.quotes.push(quote);
    console.log(this.quotes);
  }
  eliminateQuote(complete,index){
    if(complete){
      this.quotes.splice(index,1);
    }
  }
  toggleDetails(index){
    this.quotes[index].displayQuotes = !this.quotes[index].displayQuotes;
  }
  constructor() { }

  ngOnInit() {
  }

}
