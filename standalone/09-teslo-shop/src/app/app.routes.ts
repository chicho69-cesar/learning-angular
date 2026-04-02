import { Routes } from '@angular/router';
import { notAuthenticatedGuard } from './auth/guards/not-authenticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    canMatch: [
      // () => {
      //   console.log('hola Mundo');
      //   return true;
      // },
      notAuthenticatedGuard,
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./dashboard/dashboard.routes'),
  },
  {
    path: '',
    loadChildren: () => import('./store/store.routes'),
  },
];
