import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  standalone: false,
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public isProductVisible: boolean = true;
  public currentPrice: number = 100;

  // Se ejecuta antes de que se renderice el componente
  constructor() {
    console.log('ProductPageComponent: constructor');
  }

  // Se ejecuta una sola vez, después del constructor y después de que se renderiza el componente
  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  // Se ejecuta cada vez que una propiedad @Input cambia (antes de ngOnInit)
  public ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ngOnChanges');
  }

  // Se ejecuta en cada ciclo de detección de cambios (después de ngOnChanges y ngOnInit)
  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // Se ejecuta una sola vez, después de que el contenido proyectado ha sido inicializado
  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // Se ejecuta después de cada verificación del contenido proyectado, es decir, después de ngAfterContentInit y cada vez que se detectan cambios
  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // Se ejecuta una sola vez, después de que las vistas del componente y sus vistas hijas han sido inicializadas
  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // Se ejecuta después de cada verificación de las vistas del componente y sus vistas hijas, es decir, después de ngAfterViewInit y cada vez que se detectan cambios
  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // Se ejecuta justo antes de que el componente sea destruido
  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public increasePrice(): void {
    this.currentPrice += 10;
  }
}
