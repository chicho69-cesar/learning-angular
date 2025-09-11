import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { delay, map } from 'rxjs/operators';

import { User, UserResponse, UsersResponse } from '../interfaces/req-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: false
  });

  // private state = signal<State>({
  //   users: [],
  //   loading: false
  // });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.loadData();
  }

  private loadData() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(
        delay(1500)
      )
      .subscribe({
        next: ({ data }) => {
          this.#state.set({
            users: data,
            loading: false
          });
        },
        error: (err) => {
          console.log(err);
          this.#state.update(state => ({
            ...state,
            loading: false
          }));
        }
      });
  }

  public getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map((resp) => resp.data)
      );
  }
}
