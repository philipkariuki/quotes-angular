export class Quotes {
  public showDescription:boolean;
  constructor(public id:number, public name:string, public author:string, public submitter:string){
  this.showDescription=false
  }
}
