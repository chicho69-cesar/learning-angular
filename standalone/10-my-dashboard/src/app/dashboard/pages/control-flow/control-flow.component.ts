import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import TitleComponent from '../../../shared/components/title/title.component';

type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(true);
  public grade = signal<Grade>('A');

  public frameworks1 = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwik', 'Solid', 'Preact']);
  public frameworks2 = signal([]);

  public toggleContent(): void {
    this.showContent.update((value) => !value);
  }
}
