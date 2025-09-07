import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'maps-mini-map',
  standalone: false,
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {
  @Input()
  public lngLat?: [number, number];

  @ViewChild('map')
  public mapDiv?: ElementRef;

  public ngAfterViewInit(): void {
    if (!this.mapDiv) throw 'Map Div not found';
    if (!this.lngLat) throw 'Lat and Lng doesn\'t implemented';

    const map = new mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false
    });

    const marker = new mapboxgl.Marker();
    marker.setLngLat(this.lngLat);
    marker.addTo(map);
  }
}
