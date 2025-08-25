import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddCharacter } from './components/add-character/add-character.component';
import { List } from './components/list/list.component';
import { MainPage } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddCharacter,
    List,
    MainPage
  ],
  exports: [
    MainPage
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
