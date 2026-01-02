import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interface';

export class CountryMapper {
  public static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capital.join(', '),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      population: restCountry.population,
      region: restCountry.region,
      subRegion: restCountry.subregion,
    };
  }

  public static mapRestCountyArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(CountryMapper.mapRestCountryToCountry);
  }
}
