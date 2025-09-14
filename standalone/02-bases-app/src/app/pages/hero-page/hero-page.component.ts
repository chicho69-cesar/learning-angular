import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  public name = signal('Ironman');
  public age = signal(45);

  public heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  public capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  public changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  public changeAge(): void {
    this.age.update((currentAge) => currentAge + 1);
  }

  public resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
