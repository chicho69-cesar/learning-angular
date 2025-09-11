import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import TitleComponent from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export default class ChangeDetectionComponent {
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`);

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((framework) => {
        framework.name = 'React';
        return { ...framework };
      });
    }, 3000);
  }
}
