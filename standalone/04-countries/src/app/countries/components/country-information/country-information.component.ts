import { DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
  styleUrl: './country-information.component.css'
})
export class CountryInformationComponent {
  public country = input.required<Country>();

  public currentYear = computed(() => {
    return new Date().getFullYear();
  });
}
