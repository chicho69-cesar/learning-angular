import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, map, Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { User } from '../interfaces/user.interface';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

const AUTH_TOKEN_KEY = 'TesloShopToken';
const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(localStorage.getItem(AUTH_TOKEN_KEY));

  public user = computed(() => this._user());
  public token = computed(this._token);
  public isAdmin = computed(() => this._user()?.roles.includes('admin') ?? false);
  public authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking';
    if (this._user()) return 'authenticated';
    return 'not-authenticated';
  });

  public checkStatusResource = rxResource({
    stream: () => this.checkStatus(),
  });

  public login(email: string, password: string): Observable<boolean> {
    return this.http
      .post<AuthResponse>(
        `${baseUrl}/auth/login`,
        { email, password }
      )
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error) => this.handleAuthError(error)),
      );
  }

  public register(name: string, email: string, password: string): Observable<boolean> {
    return this.http
      .post<AuthResponse>(
        `${baseUrl}/auth/register`,
        { email, password, fullName: name }
      )
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error) => this.handleAuthError(error)),
      );
  }

  public checkStatus(): Observable<boolean> {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (!token) {
      this.logout();
      return of(false);
    }

    return this.http
      .get<AuthResponse>(
        `${baseUrl}/auth/check-status`,
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      )
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error) => this.handleAuthError(error)),
      );
  }

  public logout(): void {
    this._token.set(null);
    this._user.set(null);
    this._authStatus.set('not-authenticated');

    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  private handleAuthSuccess({ token, user }: AuthResponse) {
    this._token.set(token);
    this._user.set(user);
    this._authStatus.set('authenticated');

    localStorage.setItem(AUTH_TOKEN_KEY, token);

    return true;
  }

  private handleAuthError(error: any) {
    this.logout();
    return of(false);
  }
}
