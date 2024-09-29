import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Guitar } from '../../types/guitar.type';

@Component({
  selector: 'app-guitar',
  standalone: true,
  imports: [],
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.css'
})
export class GuitarComponent {
  @Input() guitar!: Guitar;
  @Output() addToCart = new EventEmitter<Guitar>();

  onAddToCart(): void {
    this.addToCart.emit(this.guitar);
    // console.log('Add to cart', this.guitar);
  }
}
