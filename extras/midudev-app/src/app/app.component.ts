import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  http = inject(HttpClient);
  title = 'Midudev Store App';
  products: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => this.products = data);
  }

  changeTitle() {
    if (this.title === 'Midudev Store App') {
      this.title = 'Sorpresa!';
    } else {
      this.title = 'Midudev Store App';
    }
  }
}
