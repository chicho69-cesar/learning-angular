import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { interval, take, tap } from 'rxjs';

import { Product } from '../../../interfaces/product.interface';
import ProductCardComponent from './ui/product-card/product-card.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 1,
    },
  ]);

  private intervaleSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((currentProducts) => [
          ...currentProducts,
          {
            id: currentProducts.length + 1,
            name: `Product ${currentProducts.length + 1}`,
            quantity: Math.floor(Math.random() * 100),
          }
        ])
      }),
      take(10),
    )
    .subscribe();

  public ngOnDestroy(): void {
    this.intervaleSubscription.unsubscribe();
  }

  public updateQuantity(product: Product, newQuantity: number): void {
    this.products.update((currentProducts) => {
      return currentProducts.map((p, id) => product.id === p.id ? { ...p, quantity: newQuantity } : p);
    });
  }
}
