import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent {
  public fb = inject(FormBuilder);
  public countryService = inject(CountryService);

  public regions = signal(this.countryService.regions);
  public countriesByRegion = signal<Country[]>([]);
  public bordersByCountry = signal<Country[]>([]);

  public countryForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  public onCountryFormChange = effect((onCleanup) => {
    const regionSubscription = this.onRegionChange();
    const countrySubscription = this.onCountryChange();

    onCleanup(() => {
      regionSubscription.unsubscribe();
      countrySubscription.unsubscribe();
    });
  });

  public onRegionChange() {
    return this.countryForm
      .get('region')!
      .valueChanges
      .pipe(
        tap(() => this.countryForm.get('country')!.setValue('')),
        tap(() => this.countryForm.get('border')!.setValue('')),
        tap(() => {
          this.bordersByCountry.set([]);
          this.countriesByRegion.set([]);
        }),
        switchMap((region) => {
          return this.countryService.getCountriesByRegion(region ?? '');
        }),
      )
      .subscribe({
        next: (countries) => {
          this.countriesByRegion.set(countries);
        }
      });
  }

  public onCountryChange() {
    return this.countryForm
      .get('country')!
      .valueChanges
      .pipe(
        tap(() => this.countryForm.get('border')!.setValue('')),
        filter((value) => value!.length > 0),
        switchMap((countryCode) => {
          return this.countryService.getCountryByAlphaCode(countryCode!);
        }),
        switchMap((country) => {
          return this.countryService.getCountryNamesByCodeArray(country.borders ?? []);
        }),
      )
      .subscribe({
        next: (borders) => {
          this.bordersByCountry.set(borders);
        }
      });
  }
}
