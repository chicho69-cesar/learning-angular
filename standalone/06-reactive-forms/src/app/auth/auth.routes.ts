import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'account',
        component: RegisterPageComponent
      },
      {
        path: '**',
        redirectTo: 'account'
      }
    ]
  }
];

export default AUTH_ROUTES;
