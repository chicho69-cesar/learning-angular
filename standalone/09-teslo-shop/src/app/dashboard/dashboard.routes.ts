import { Routes } from '@angular/router';

import { isAdminGuard } from '../auth/guards/is-admin.guard';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ProductAdminPageComponent } from './pages/product-admin-page/product-admin-page.component';
import { ProductsAdminPageComponent } from './pages/products-admin-page/products-admin-page.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    canMatch: [isAdminGuard],
    children: [
      {
        path: 'products',
        component: ProductsAdminPageComponent,
      },
      {
        path: 'products/:id',
        component: ProductAdminPageComponent,
      },
      {
        path: '**',
        redirectTo: 'products'
      }
    ]
  }
];

export default DASHBOARD_ROUTES;
