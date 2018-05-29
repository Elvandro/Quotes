import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.","Francis of Assisi","Elvis",0,0,new Date(2018,5,1)),
  ]
  createNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.dateCreated = new Date();
    this.quotes.push(quote);
    console.log(this.quotes);
  }
  deleteQuote(complete,index){
    if(complete){
      this.quotes.splice(index,1);
    }
  }
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() { }

  ngOnInit() {
  }

}
