import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Marker } from 'mapbox-gl';
import { MapsLayoutComponent } from './layouts/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'fullscreen',
        component: FullScreenPageComponent,
      },
      {
        path: 'zoom-range',
        component: ZoomRangePageComponent,
      },
      {
        path: 'markers',
        component: Marker,
      },
      {
        path: 'properties',
        component: PropertiesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'fullscreen'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
