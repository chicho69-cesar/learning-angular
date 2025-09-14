import { Component, signal } from '@angular/core';

@Component({
  selector: 'counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `
})
export class CounterPageComponent {
  public counter = 10;
  public counterSignal = signal(10);

  constructor() { }

  public changeBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  public reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
