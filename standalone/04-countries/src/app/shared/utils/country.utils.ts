import { Region } from '../../countries/interfaces/region.interface';

export function validateQueryCountry(countryParam: string): Region {
  countryParam = countryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',
  };

  return validRegions[countryParam] ?? 'Americas';
}
