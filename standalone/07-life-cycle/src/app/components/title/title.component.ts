import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnChanges {
  public title = input.required<string>();
  public title1 = input.required<string>();
  public title2 = input.required<string>();
  public title3 = input.required<string>();
  public title4 = input.required<string>();

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called in TitleComponent');

    for (let change in changes) {
      const value = changes[change];

      console.log(`Property '${change}' changed:`);
      console.log(`Previous ${change} == ${value.previousValue}`);
      console.log(`Current ${change} == ${value.currentValue}`);
      console.log(`Is first ${change} change == ${value.firstChange}`);
    }
  }
}
