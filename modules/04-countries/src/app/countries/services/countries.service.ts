import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { CacheStore } from '../interfaces/cache-store';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region.type';

const CACHE_KEY = 'countriesCache';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(
    private http: HttpClient
  ) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(CACHE_KEY, JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem(CACHE_KEY)) return;
    this.cacheStore = JSON.parse(localStorage.getItem(CACHE_KEY)!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map((countries) => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap((countries) => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap((countries) => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  public searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap((countries) => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }
}
