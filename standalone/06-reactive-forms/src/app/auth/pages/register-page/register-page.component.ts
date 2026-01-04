import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils } from '../../../utils/form.utils';

@Component({
  selector: 'auth-register-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  public fb = inject(FormBuilder);
  public formUtils = FormUtils;

  public authForm = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(FormUtils.namePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(FormUtils.emailPattern)],
        [FormUtils.checkingServerResponse],
      ],
      username: [
        '',
        [Validators.required, Validators.minLength(6), Validators.pattern(FormUtils.notOnlySpacesPattern), FormUtils.notStrider],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
      confirmPassword: [
        '',
        Validators.required,
      ],
    },
    {
      validators: [FormUtils.isFieldOneEqualFieldTwo('password', 'confirmPassword')],
    }
  );

  public onSubmit(): void {
    this.authForm.markAllAsTouched();
    console.log(this.authForm.value);
  }
}
