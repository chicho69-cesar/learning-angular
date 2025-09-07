import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'maps-full-screen-page',
  standalone: false,
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;

  public ngAfterViewInit(): void {
    if (!this.divMap) throw 'Map container not found';

    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 9,
      center: [-74.5, 40]
    });
  }
}
