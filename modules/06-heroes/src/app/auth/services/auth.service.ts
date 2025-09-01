import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private user?: User;

  constructor(
    private http: HttpClient
  ) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  public login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap((user) => this.user = user),
        tap((user) => localStorage.setItem('heroesToken', 'aASDgjhasda.asdasd.aadsf123k'))
      );
  }

  public register(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap((user) => this.user = user),
        tap((user) => localStorage.setItem('heroesToken', 'aASDgjhasda.asdasd.aadsf123k'))
      );
  }

  public logout(): void {
    this.user = undefined;
    localStorage.removeItem('heroesToken');
  }

  public checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('heroesToken')) {
      return of(false);
    }

    const heroesToken = localStorage.getItem('heroesToken');

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap((user) => this.user = user),
        map((user) => !!user),
        catchError((err) => of(false))
      );
  }
}
