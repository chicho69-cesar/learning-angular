import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import TitleComponent from '../../../../shared/components/title/title.component';

@Component({
  selector: 'app-view-transitions-1',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transitions-1.component.html',
  styles: ``,
})
export default class ViewTransitions1Component { }
