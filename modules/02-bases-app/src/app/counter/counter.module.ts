import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Counter } from './components/counter/counter.component';

@NgModule({
  declarations: [
    Counter,
  ],
  exports: [
    Counter
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
