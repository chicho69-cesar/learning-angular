import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('es');

  constructor() {
    this.currentLocale.set((localStorage.getItem('locale') as AvailableLocale) ?? 'es');
  }

  public get getLocale() {
    return this.currentLocale();
  }

  public changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
