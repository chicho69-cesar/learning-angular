import { Component } from '@angular/core';

@Component({
  selector: 'examples-numbers-page',
  standalone: false,
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
  public totalSells: number = 2567789.5567;
  public percent: number = 0.4856;
}
