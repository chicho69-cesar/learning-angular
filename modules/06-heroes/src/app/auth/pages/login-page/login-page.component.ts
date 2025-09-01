import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  public onLogin(): void {
    this.authService.login('cesar@google.com', '123456')
      .subscribe((user) => {
        this.router.navigate(['/']);
      });
  }
}
