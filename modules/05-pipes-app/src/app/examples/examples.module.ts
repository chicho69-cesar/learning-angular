import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ExamplesRoutingModule } from './examples-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { CustomTitlePipe } from './pipes/custom-title.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderPageComponent,
    UncommonPageComponent,
    CanFlyPipe,
    SortByPipe,
    ToggleCasePipe,
    CustomTitlePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
