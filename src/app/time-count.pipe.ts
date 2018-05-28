import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today:Date = new Date(); // current date and timeCount
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(value-todayWithNoTime);//returns value in milliseconds
    const secondsInADay = 86400;

    var dateDifferenceSeconds = dateDifference*0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
