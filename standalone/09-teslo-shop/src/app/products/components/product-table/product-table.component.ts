import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { Product } from '../../interfaces/product.interface';
import { ProductImagePipe } from '../../pipes/product-image.pipe';

@Component({
  selector: 'products-product-table',
  imports: [ProductImagePipe, RouterLink, CurrencyPipe],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  public products = input.required<Product[]>();
}
