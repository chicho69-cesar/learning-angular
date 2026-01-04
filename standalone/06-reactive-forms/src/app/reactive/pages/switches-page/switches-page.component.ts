import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormUtils } from '../../../utils/form.utils';

@Component({
  selector: 'reactive-switches-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent {
  private fb = inject(FormBuilder);
  public formUtils = FormUtils;

  public myForm = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public onSubmit(): void {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
