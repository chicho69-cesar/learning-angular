import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public productList: IProduct[] = []
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      console.log(data)
      this.productList = data;
    });
  }

  navigate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
