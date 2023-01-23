import { Component } from '@angular/core';
import { Color, Heroe } from '../../inrefaces/sales.interfaces';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent {

  isUpperCase: boolean = false;
  orderBy: string = '';
  
  heroes: Heroe [] = [
    {
      name: 'superman',
      flying: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.black
    },
    {
      name: 'robin',
      flying: false,
      color: Color.red
    },
    {
      name: 'Daredevil',
      flying: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      flying: true,
      color: Color.green
    }
  ];


  changeUpperCase() {
    this.isUpperCase =  !this.isUpperCase;
  }
}
