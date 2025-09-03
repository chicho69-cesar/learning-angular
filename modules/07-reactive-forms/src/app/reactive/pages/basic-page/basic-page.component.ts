import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6,
}

@Component({
  selector: 'reactive-basic-page',
  standalone: false,
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    });
  }

  public ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  public isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  public getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      if (key === 'required') {
        return 'El campo es obligatorio';
      }

      if (key === 'minlength') {
        return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  public onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      name: '',
      price: 0,
      inStorage: 0,
    });
  }
}
