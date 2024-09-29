import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [AlertComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnChanges {
  @Input() id: string | null = null;
  @Input() name: string = '';
  @Input() property: string = '';
  @Input() email: string = '';
  @Input() date: string = '';
  @Input() symptoms: string = '';

  @Output() updateName = new EventEmitter<string>();
  @Output() updateProperty = new EventEmitter<string>();
  @Output() updateEmail = new EventEmitter<string>();
  @Output() updateDate = new EventEmitter<string>();
  @Output() updateSymptoms = new EventEmitter<string>();
  @Output() savePatient = new EventEmitter<void>();

  alertState = { type: '', message: '' };
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [this.name, Validators.required],
      property: [this.property, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      date: [this.date, Validators.required],
      symptoms: [this.symptoms, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const changesKeys = Object.keys(changes);

    for (let key of changesKeys) {
      if (changes[key].currentValue && this.form.controls[key]) {
        this.form.controls[key].setValue(changes[key].currentValue);
      }
    }
  }

  get editing() {
    return !!this.id;
  }

  validate() {
    if (this.form.invalid) {
      this.alertState.type = 'error';
      this.alertState.message = 'Todos los campos son obligatorios';
      return;
    }

    this.savePatient.emit();
    this.alertState.type = 'success';
    this.alertState.message = 'Paciente almacenado correctamente';

    setTimeout(() => {
      this.alertState = { type: '', message: '' };
    }, 3000);
  }

  updateField(event: any, field: string) {
    const value = event.target.value;

    switch (field) {
      case 'name':
        this.updateName.emit(value);
        this.form.controls['name'].setValue(value);
        break;
      case 'property':
        this.updateProperty.emit(value);
        this.form.controls['property'].setValue(value);
        break;
      case 'email':
        this.updateEmail.emit(value);
        this.form.controls['email'].setValue(value);
        break;
      case 'date':
        this.updateDate.emit(value);
        this.form.controls['date'].setValue(value);
        break;
      case 'symptoms':
        this.updateSymptoms.emit(value);
        this.form.controls['symptoms'].setValue(value);
        break;
    }
  }
}
