import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content></ng-content>
    </section>
  `
})
export default class HeavyLoaderFastComponent {
  @Input({ required: true })
  public cssClass!: string;

  constructor() {
    console.log('HeavyLoaderFastComponent loaded');
  }
}
