import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { privateRouteGuard } from './auth/guards/private-route.guard';
import { publicRouteGuard } from './auth/guards/public-route.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [publicRouteGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [privateRouteGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
