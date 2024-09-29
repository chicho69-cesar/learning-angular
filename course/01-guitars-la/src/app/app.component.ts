import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { GuitarComponent } from './components/guitar/guitar.component';
import { HeaderComponent } from './components/header/header.component';
import { db } from './data/guitars.data';
import { Cart, Guitar } from './types/guitar.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GuitarComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  guitars: Guitar[] = [];
  cart: Cart[] = [];
  headerGuitar: Guitar | undefined;

  ngOnInit(): void {
    this.guitars = db;
    this.headerGuitar = db[3];

    const cartStorage = localStorage.getItem('cart');

    if (cartStorage) {
      this.cart = JSON.parse(cartStorage);
    }
  }

  saveInLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(guitar: Guitar): void {
    const existsInCart = this.cart.findIndex(product => product.id === guitar.id);

    if (existsInCart >= 0) {
      this.cart[existsInCart].quantity++;
    } else {
      alert('Se ha añadido la guitarra al carrito');
      const guitarToAdd = { ...guitar, quantity: 1 };
      this.cart.push(guitarToAdd);
    }

    this.saveInLocalStorage();
  }

  decreaseQuantity(id: number): void {
    const index = this.cart.findIndex(product => product.id === id);

    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
      this.saveInLocalStorage();
    }
  }

  increaseQuantity(id: number): void {
    const index = this.cart.findIndex(product => product.id === id);

    if (this.cart[index].quantity < 5) {
      this.cart[index].quantity++;
      this.saveInLocalStorage();
    }
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter(product => product.id !== id);
    this.saveInLocalStorage();
  }

  clearCart(): void {
    this.cart = [];
    this.saveInLocalStorage();
  }
}
