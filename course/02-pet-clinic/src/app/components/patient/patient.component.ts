import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../../types/patient.type';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  @Input() patient!: Patient;

  @Output() updatePatient = new EventEmitter<string>();
  @Output() deletePatient = new EventEmitter<string>();

  onUpdatePatient() {
    if (this.patient.id) {
      this.updatePatient.emit(this.patient.id);
    }
  }

  onDeletePatient() {
    if (this.patient.id) {
      this.deletePatient.emit(this.patient.id);
    }
  }
}
