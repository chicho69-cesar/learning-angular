import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'auth-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  public myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService,
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastNamePattern)]],
      // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidator()]],
      email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
      username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    }, {
      validators: [
        this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
      ]
    });
  }

  public isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
