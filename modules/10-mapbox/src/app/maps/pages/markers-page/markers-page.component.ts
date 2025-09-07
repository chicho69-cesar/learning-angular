import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: mapboxgl.Marker;
}

interface PlainMarker {
  color: string;
  lngLat: [number, number];
}

@Component({
  selector: 'maps-markers-page',
  standalone: false,
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map')
  public mapElement!: ElementRef;

  public markers: MarkerAndColor[] = [];
  public map?: mapboxgl.Map;
  public currentLngLat: mapboxgl.LngLat = new mapboxgl.LngLat(-74.10380784179445, 4.651165392795477);

  public ngAfterViewInit(): void {
    if (!this.mapElement) throw 'Map element is not defined';

    this.map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 13
    });

    this.readFromLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Fernando Herrera'

    // const marker = new Marker({
    //   element: markerHtml
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }

  public createMarker(): void {
    if (!this.map) throw 'Map is not initialized';

    const color = '#xxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  public addMarker(lngLat: mapboxgl.LngLat, color: string): void {
    if (!this.map) throw 'Map is not initialized';

    const marker = new mapboxgl.Marker({
      color,
      draggable: true
    });

    marker.setLngLat(lngLat)
    marker.addTo(this.map);

    this.markers.push({ color, marker });

    this.saveToLocalStorage();
    marker.on('dragend', () => this.saveToLocalStorage());
  }

  public deleteMarker(index: number): void {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  public flyTo(marker: mapboxgl.Marker): void {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });
  }

  public saveToLocalStorage(): void {
    const plainMarkers: PlainMarker[] = this.markers.map(({ color, marker }) => ({
      color: color,
      lngLat: marker.getLngLat().toArray() as [number, number]
    }));

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  public readFromLocalStorage(): void {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString) as PlainMarker[];

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new mapboxgl.LngLat(lng, lat);

      this.addMarker(coords, color);
    });
  }
}
