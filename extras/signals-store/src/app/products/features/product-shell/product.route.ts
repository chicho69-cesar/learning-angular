import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../product-list/product-list.component').then((m) => m.ProductListComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('../product-detail/product-detail.component').then((m) => m.ProductDetailComponent),
  },
] as Routes;
