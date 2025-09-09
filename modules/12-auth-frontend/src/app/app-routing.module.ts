import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { privateRouteGuardGuard } from './auth/guards/private-route.guard';
import { publicRouteGuardGuard } from './auth/guards/public-route.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [publicRouteGuardGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [privateRouteGuardGuard],
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
