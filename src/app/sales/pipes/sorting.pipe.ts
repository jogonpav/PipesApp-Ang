import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../inrefaces/sales.interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Heroe [], orderBy: string = 'no value'): Heroe [] {

    switch(orderBy){
        case 'name': {
          value = value.sort( (a,b) => (a.name> b.name ? 1:-1));
          break;
        }
        case 'flying': {
          value = value.sort( (a,b) => (a.flying> b.flying ? -1: 1));
          break;
        }
        case 'color': {
          value = value.sort( (a,b) => (a.color> b.color ? 1:-1));
          break;
        }
    }
    return value;
  }

}
