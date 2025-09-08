import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  standalone: false,
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  public counter = signal<number>(10);
  public square = computed(() => this.counter() * this.counter());

  public changeBy(value: number): void {
    this.counter.update((current) => current + value);
  }
}
