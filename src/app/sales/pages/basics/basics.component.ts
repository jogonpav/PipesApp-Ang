import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent {

  lowerName: string = "José";
  upperName: string = "JOSÉ";
  fullName: string = "JosE PaBÓn";

  date: Date = new Date();

}
