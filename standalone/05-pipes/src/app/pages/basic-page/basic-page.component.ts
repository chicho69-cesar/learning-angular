import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';

import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export default class BasicPageComponent {
  public localeService = inject(LocaleService);
  public currentLocale = signal(inject(LOCALE_ID));

  public nameLower = signal('cesar');
  public nameUpper = signal('CESAR');
  public fullName = signal('CeSar ViLLaLobOS OlMoS');

  public customDate = signal(new Date());

  public tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('Tick');
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    });
  });

  public changeLocale(locale: AvailableLocale) {
    console.log('Changing locale to:', locale);
    this.localeService.changeLocale(locale);
  }
}
