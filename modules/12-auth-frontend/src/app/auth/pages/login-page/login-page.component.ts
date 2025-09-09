import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public loginForm = this.fb.group({
    email: ['cesar@google.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  public onLogin(): void {
    const { email, password } = this.loginForm.value;

    this.authService.login(email!, password!)
      .subscribe({
        next: (user) => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          Swal.fire('Error', error, 'error');
        },
      });
  }
}
