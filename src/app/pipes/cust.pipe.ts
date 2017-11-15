import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: string, args?: number): string {

    let op = '';
    for (let i = 0; i < args; i++) {
      op = op + `, ${value}`;
    }
    return op;
  }
}
