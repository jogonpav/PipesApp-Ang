import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortingComponent } from './pages/sorting/sorting.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortingComponent
  ],
  exports:[
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortingComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
