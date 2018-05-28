import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() Quote:Quote;
  @Output() complete = new EventEmitter<boolean>();

  upVote(){
    this.Quote.upVotes ++
  };
  downVote(){
    this.Quote.downVotes --
  };

  deleteQuote(deleteIt:boolean){
    this.complete.emit(deleteIt);
  }

  constructor() { }

  ngOnInit() {
  }

}
