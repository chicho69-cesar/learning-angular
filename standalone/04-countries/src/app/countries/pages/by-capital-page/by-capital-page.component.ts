import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, of } from 'rxjs';

import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  public countryService = inject(CountryService);
  public activatedRoute = inject(ActivatedRoute);
  public router = inject(Router);

  public queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  public query = linkedSignal(() => this.queryParam);

  public countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          query: params.query,
        },
      });

      return this.countryService.searchByCapital(params.query);
    },
  });



  // ========== Old Resource Implementation ==========
  public oldCountryResource = resource({
    params: () => ({ query: this.query() }),
    loader: ({ params }) => {
      if (!params.query) return Promise.resolve([]);

      return firstValueFrom(
        this.countryService.searchByCapital(params.query)
      );
    },
  });

  public isLoading = signal(false);
  public isError = signal<string | null>(null);
  public countries = signal<Country[]>([]);

  public onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err);
      },
    });
  }
}
