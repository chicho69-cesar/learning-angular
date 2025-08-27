import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly countriesService: CountriesService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe({
        next: (country) => {
          if (!country) {
            this.router.navigateByUrl('');
            return;
          }
          
          this.country = country;
        }
      });
  }
}
