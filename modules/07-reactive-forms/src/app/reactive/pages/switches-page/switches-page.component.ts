import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-switches-page',
  standalone: false,
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit {
  public myForm!: FormGroup;

  public person = {
    gender: 'F',
    wantNotifications: false,
  };

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      gender: ['M', Validators.required],
      wantNotifications: [true, Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
    });
  }

  public ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  public isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  public onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log({ person: this.person });
    console.log({ formValue: this.myForm.value });
    console.log({ termsAndConditions });
  }
}
