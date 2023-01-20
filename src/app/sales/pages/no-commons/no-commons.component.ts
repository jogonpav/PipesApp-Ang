import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {

  //i18nPrural
  clients: string [] = ['maria', 'pedro', 'hernando', 'eduardo'];

  clientsMap = {
    '=0':"we don't have any client waiting",
    '=1':'we have a client waiting',
    'other': 'we have # client waiting'
  }

  //i18nSelet
  name: string = 'andrea';
  gender: string = 'female';

  invateMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeName(){
      this.name = 'Jose';
      this.gender = 'male';
  }

  deleteName(){
    this.clients.shift();
  }
  

}
