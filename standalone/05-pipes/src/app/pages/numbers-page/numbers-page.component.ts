import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export default class NumbersPageComponent {
  public totalSells = signal(2_433_232.5567);
  public percent = signal(0.4856);
}
