import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Hero } from './components/hero/hero.component';
import { List } from './components/list/list.component';

@NgModule({
  declarations: [
    Hero,
    List
  ],
  exports: [
    Hero,
    List,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
