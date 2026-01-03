import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

import { heroes } from '../../data/heroes.data';
import { Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css'
})
export default class CustomPageComponent {
  public name = signal('Cesar Villalobos Olmos');
  public upperCase = signal(true);
  public heroes = signal(heroes);
  public sortBy = signal<keyof Hero | null>(null);
  public searchQuery = signal('');
}
