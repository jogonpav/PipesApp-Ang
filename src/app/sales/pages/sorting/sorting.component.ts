import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent {

  isUpperCase: boolean = false;

  changeUpperCase() {
    
    //this.isUpperCase = (this.isUpperCase) ? false : true;

    this.isUpperCase =  !this.isUpperCase;
  }
}
