export class Quote {
    public displayQuotes:boolean;
    constructor(public author:string,
      public quote:string,
      public person:string,
      public dateCreated:Date
      public upVotes:number,
      public downVotes:number){
      this.displayQuotes=false;
    }
}
