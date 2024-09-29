import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientService } from './services/patient.service';
import { Patient } from './types/patient.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PatientComponent, FormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  patients: Patient[] = [];
  patient: Patient = {
    id: '',
    name: '',
    property: '',
    email: '',
    date: '',
    symptoms: ''
  };

  constructor(private _patientService: PatientService) { }

  ngOnInit(): void {
    this.patients = this._patientService.getPatients();
  }

  onChangeName(name: string) {
    this.patient.name = name;
  }

  onChangeProperty(property: string) {
    this.patient.property = property;
  }

  onChangeEmail(email: string) {
    this.patient.email = email;
  }

  onChangeDate(date: string) {
    this.patient.date = date;
  }

  onChangeSymptoms(symptoms: string) {
    this.patient.symptoms = symptoms;
  }

  savePatient() {
    if (this.patient.id) {
      this._patientService.updatePatient(this.patient, this.patients);
    } else {
      this._patientService.addPatient(this.patient, this.patients);
    }

    this.resetForm();
  }

  updatePatient(id: string) {
    const patientToEdit = this.patients.find((p) => p.id === id);

    if (patientToEdit) {
      this.patient = { ...patientToEdit };
    }
  }

  deletePatient(id: string) {
    this.patients = this._patientService.deletePatient(id, this.patients);
  }

  resetForm() {
    this.patient = {
      id: null,
      name: '',
      property: '',
      email: '',
      date: '',
      symptoms: '',
    };
  }
}
