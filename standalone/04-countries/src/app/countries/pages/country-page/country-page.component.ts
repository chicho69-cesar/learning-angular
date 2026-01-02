import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { NotFoundPageComponent } from '../../../shared/pages/not-found-page/not-found-page.component';
import { CountryInformationComponent } from '../../components/country-information/country-information.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundPageComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent {
  public countryCode = inject(ActivatedRoute).snapshot.params['code'];
  public countryService = inject(CountryService);

  public countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => this.countryService.searchByAlphaCode(params.code),
  });
}
