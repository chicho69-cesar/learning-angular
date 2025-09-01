import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'heroes-hero-layout',
  standalone: false,
  templateUrl: './hero-layout.component.html',
  styleUrl: './hero-layout.component.css'
})
export class HeroLayoutComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['./auth/login']);
  }
}
