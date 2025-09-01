import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  public onRegister(): void {
    this.authService.register('cesar@google.com', '123456')
      .subscribe((user) => {
        this.router.navigate(['/']);
      });
  }
}
