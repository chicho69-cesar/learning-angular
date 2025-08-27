import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(
    private readonly countriesService: CountriesService
  ) { }

  public ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  public searchByCountry(term: string): void {
    this.isLoading = true;

    this.countriesService.searchCountry(term)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
          this.isLoading = false;
        },
      });
  }
}
