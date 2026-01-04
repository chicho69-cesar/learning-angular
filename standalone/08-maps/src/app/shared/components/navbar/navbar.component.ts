import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, tap } from 'rxjs';

import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);

  public routes = routes
    .map((route) => ({
      path: route.path,
      title: route.title ?? 'Angular Maps',
    }))
    .filter((route) => route.path !== '**');

  public pageTitle$ = this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      tap((event) => console.log('Event: ', event)),
      map((event) => event.url),
      map((url) => this.routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas')
    );

  public pageTitle = toSignal(
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((event) => console.log('Event: ', event)),
        map((event) => event.url),
        map((url) => this.routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas')
      )
  );
}
