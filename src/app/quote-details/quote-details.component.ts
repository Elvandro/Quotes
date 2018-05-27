import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() inspiration:Quote;
  @Output() complete = new EventEmitter<boolean>();

  upvote(){
    this.inspiration.upVotes ++
  }
  downVote(){
    this.inspiration.downVotes --
  }

  deleteQuote(deleteIt:boolean){
    this.complete.emit(deleteIt);
  }

  constructor() { }

  ngOnInit() {
  }

}
