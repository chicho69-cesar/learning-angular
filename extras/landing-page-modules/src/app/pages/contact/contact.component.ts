import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  sendForm(event: Event): void {
    if (this.contactForm.valid) {
      event.preventDefault();
      console.log(this.contactForm.value);
    }
  }

  hasError(formControlName: string, errorType: string) {
    const errorValidation = this.contactForm.get(formControlName)?.hasError(errorType);
    const touchedValidation = this.contactForm.get(formControlName)?.touched;
    
    return errorValidation && touchedValidation;
  }
}
