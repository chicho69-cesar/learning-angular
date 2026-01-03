import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.routes').then((m) => m.REACTIVE_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.routes').then((m) => m.COUNTRIES_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'reactive'
  }
];
