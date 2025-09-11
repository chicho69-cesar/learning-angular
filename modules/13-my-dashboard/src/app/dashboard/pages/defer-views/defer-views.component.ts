import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import HeavyLoaderSlowComponent from '../../../shared/components/heavy-loaders/heavy-loader-slow.component';
import TitleComponent from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoaderSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``,
})
export default class DeferViewsComponent { }
