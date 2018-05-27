export class Quote {
    public displayQuotes:boolean;
    constructor(public author:string,
      public quote:string,
      public person:string,
      public dateCreated:Date){
      this.displayQuotes=false;
    }
}
