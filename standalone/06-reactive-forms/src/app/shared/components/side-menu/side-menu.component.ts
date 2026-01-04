import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { REACTIVE_ROUTES } from '../../../reactive/reactive.routes';

interface MenuItem {
  title: string;
  route: string;
}

const reactiveItems = REACTIVE_ROUTES[0].children ?? [];

@Component({
  selector: 'shared-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = reactiveItems
    .filter((item) => item.path !== '**')
    .map((item) => ({
      route: `reactive/${item.path}`,
      title: `${item.title}`
    }))

  public authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];

  public countryMenu: MenuItem[] = [
    {
      title: 'Países',
      route: './countries',
    },
  ];
}
