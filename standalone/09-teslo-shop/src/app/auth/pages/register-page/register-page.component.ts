import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { FormUtils } from '../../../utils/form.utils';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-register-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  public fb = inject(FormBuilder);
  public router = inject(Router);
  public authService = inject(AuthService);

  public hasError = signal(false);
  public isPosting = signal(false);

  public formUtils = FormUtils;

  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [FormUtils.isFieldOneEqualFieldTwo('password', 'confirmPassword')],
  });

  public onSubmit() {
    if (this.registerForm.invalid) {
      this.hasError.set(true);

      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);

      return;
    }

    const {
      name = '',
      email = '',
      password = '',
    } = this.registerForm.value;

    this.authService.register(name!, email!, password!).subscribe({
      next: (isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigateByUrl('/');
          return;
        }

        this.hasError.set(true);

        setTimeout(() => {
          this.hasError.set(false);
        }, 2000);
      }
    });
  }
}
