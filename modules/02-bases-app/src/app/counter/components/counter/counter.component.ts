import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class Counter {
  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public decreaseBy(value: number): void {
    this.counter -= value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
