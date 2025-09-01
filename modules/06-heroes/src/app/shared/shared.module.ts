import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';

@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    Error404PageComponent
  ]
})
export class SharedModule { }
