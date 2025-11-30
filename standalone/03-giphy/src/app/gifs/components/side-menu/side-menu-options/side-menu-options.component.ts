import { Component, inject } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {
  public gifService = inject(GifsService);

  public menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
