import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public registerForm = this.fb.group({
    name: ['Cesar', []],
    email: ['cesar@google.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  public onRegister(): void {
    const { name, email, password } = this.registerForm.value;

    this.authService.register(name!, email!, password!)
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
