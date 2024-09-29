import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart, Guitar } from '../../types/guitar.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() cart!: Array<Cart>;
  @Input() headerGuitar?: Guitar;

  @Output() addToCart = new EventEmitter<Guitar>();
  @Output() removeFromCart = new EventEmitter<number>();
  @Output() clearCart = new EventEmitter<void>();
  @Output() increaseQuantity = new EventEmitter<number>();
  @Output() decreaseQuantity = new EventEmitter<number>();

  public get total(): number {
    return this.cart.reduce((total, guitar) => total + guitar.price * guitar.quantity, 0);
  }

  public onAddToCart(): void {
    this.addToCart.emit(this.headerGuitar);
  }

  public onRemoveFromCart(id: number): void {
    this.removeFromCart.emit(id);
  }

  public onClearCart(): void {
    this.clearCart.emit();
  }

  public onIncreaseQuantity(id: number): void {
    this.increaseQuantity.emit(id);
  }

  public onDecreaseQuantity(id: number): void {
    this.decreaseQuantity.emit(id);
  }
}
