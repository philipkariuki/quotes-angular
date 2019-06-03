import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {



  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var timeDifference =Math.abs(value-todayWithNoTime )
    var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;

  }
}
