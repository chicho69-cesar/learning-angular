import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  standalone: false,
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public intervalSub?: Subscription;

  constructor() {
    console.log('PriceComponent: constructor');
  }

  public ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');

    this.intervalSub = interval(1000).subscribe({
      next: (value) => console.log('Interval', value)
    })
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({ changes });
  }

  public ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.intervalSub?.unsubscribe();
  }
}
