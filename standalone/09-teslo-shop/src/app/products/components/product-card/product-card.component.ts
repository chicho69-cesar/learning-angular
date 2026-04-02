import { SlicePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { Product } from '../../interfaces/product.interface';
import { ProductImagePipe } from '../../pipes/product-image.pipe';

@Component({
  selector: 'products-product-card',
  imports: [ProductImagePipe, RouterLink, SlicePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  public product = input.required<Product>();

  public imageUrl = computed(() => {
    return `http://localhost:3000/api/files/product/${
      this.product().images[0]
    }`;
  });
}
