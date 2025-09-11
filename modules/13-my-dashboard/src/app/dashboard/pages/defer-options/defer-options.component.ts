import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import HeavyLoaderFastComponent from '../../../shared/components/heavy-loaders/heavy-loader-fast.component';
import TitleComponent from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeavyLoaderFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: ``,
})
export default class DeferOptionsComponent { }
