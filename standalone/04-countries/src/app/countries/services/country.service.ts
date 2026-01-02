import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<string, Country[]>();

  public searchByCapital(query: string): Observable<Country[]> {
    query = query.trim().toLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(CountryMapper.mapRestCountyArrayToCountryArray),
        tap((countries) => this.queryCacheCapital.set(query, countries)),
        catchError((error) => {
          console.log('Error fetching countries by capital:', error);

          return throwError(() => new Error('Failed to fetch countries by capital'));
        }),
      );
  }

  public searchByCountry(query: string): Observable<Country[]> {
    query = query.trim().toLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(CountryMapper.mapRestCountyArrayToCountryArray),
        tap((countries) => this.queryCacheCountry.set(query, countries)),
        catchError((error) => {
          console.log('Error fetching countries by name:', error);

          return throwError(() => new Error('Failed to fetch countries by name'));
        }),
      );
  }

  public searchByRegion(query: string): Observable<Country[]> {
    query = query.trim().toLowerCase();

    if (this.queryCacheRegion.has(query)) {
      return of(this.queryCacheRegion.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/region/${query}`)
      .pipe(
        map(CountryMapper.mapRestCountyArrayToCountryArray),
        tap((countries) => this.queryCacheRegion.set(query, countries)),
        catchError((error) => {
          console.log('Error fetching countries by region:', error);

          return throwError(() => new Error('Failed to fetch countries by region'));
        }),
      );
  }

  public searchByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(CountryMapper.mapRestCountyArrayToCountryArray),
        map((countries) => countries.length > 0 ? countries.at(0)! : null),
        catchError((error) => {
          console.log('Error fetching countries by code:', error);

          return throwError(() => new Error('Failed to fetch countries by code'));
        }),
      );
  }
}
