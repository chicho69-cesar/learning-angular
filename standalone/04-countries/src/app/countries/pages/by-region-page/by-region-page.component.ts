import { Component, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { validateQueryCountry } from '../../../shared/utils/country.utils';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Region } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countryService = inject(CountryService);
  public activatedRoute = inject(ActivatedRoute);
  public router = inject(Router);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  public queryParam = this.activatedRoute.snapshot.paramMap.get('region') ?? '';

  public selectedRegion = linkedSignal<Region>(() => {
    return validateQueryCountry(this.queryParam);
  });

  public countryResource = rxResource({
    params: () => ({ region: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.region) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: params.region,
        },
      });

      return this.countryService.searchByRegion(params.region);
    },
  });
}
