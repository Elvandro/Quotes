export class Quote {
    public showDetails:boolean;
    constructor(public quote:string,
      public author:string,
      public person:string,
      public dateCreated:Date,
      public upVotes:number,
      public downVotes:number){
        this.showDetails=false;
    }
}
