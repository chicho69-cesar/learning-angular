import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';

import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {
  public mapElement = viewChild<ElementRef<HTMLDivElement>>('map');
  public lngLat = input.required<{ lat: number; lng: number }>();
  public zoom = input<number>(14);

  public async ngAfterViewInit() {
    if (!this.mapElement()?.nativeElement) return;
    await new Promise((resolver) => setTimeout(resolver, 100));

    const element = this.mapElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat(),
      zoom: this.zoom(),
      interactive: false,
      pitch: 30,
    });

    new mapboxgl.Marker().setLngLat(this.lngLat()).addTo(map);
  }
}
