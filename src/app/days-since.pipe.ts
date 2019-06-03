import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
