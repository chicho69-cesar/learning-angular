import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PriceComponent } from './components/price/price.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductPageComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
