import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMy',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(mobs: string[], args?: string): string[] {

    console.log(`Argument is ${args}`);

    if (args) {
      let filterd = [];
      mobs.forEach(mb => {
        if (mb.charAt(0) === args) {
          filterd.push(mb);
        }
      });
      return filterd;
    }
    return mobs;
  }
}
