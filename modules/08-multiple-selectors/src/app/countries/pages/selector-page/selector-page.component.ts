import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';

import { Region, SmallCountry } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-selector-page',
  standalone: false,
  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.form = this.formBuilder.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      border: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  public get regions(): Region[] {
    return this.countriesService.regions;
  }

  public onRegionChanged(): void {
    this.form.get('region')!.valueChanges
      .pipe(
        tap(() => this.form.get('country')!.setValue('')),
        tap(() => this.borders = []),
        switchMap((region: Region) => this.countriesService.getCountriesByRegion(region)),
      )
      .subscribe({
        next: (countries) => this.countriesByRegion = countries,
      });
  }

  public onCountryChanged(): void {
    this.form.get('country')!.valueChanges
      .pipe(
        tap(() => this.form.get('border')!.setValue('')),
        filter((value: string) => value.length > 0),
        switchMap((alphaCode: string) => this.countriesService.getCountryByAlphaCode(alphaCode)),
        switchMap((country) => this.countriesService.getCountryBordersByCodes(country.borders)),
      )
      .subscribe({
        next: (countries) => this.borders = countries,
      });
  }
}
