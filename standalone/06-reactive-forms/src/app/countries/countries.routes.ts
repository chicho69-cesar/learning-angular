import { Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const COUNTRIES_ROUTES: Routes = [
  {
    path: '',
    component: CountryPageComponent
  }
];
