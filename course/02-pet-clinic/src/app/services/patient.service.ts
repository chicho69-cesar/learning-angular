import { Injectable } from '@angular/core';
import { Patient } from '../types/patient.type';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsKey = 'patients';

  getPatients(): Patient[] {
    const patients = localStorage.getItem(this.patientsKey);
    return patients ? JSON.parse(patients) : [];
  }

  savePatients(patients: Patient[]): void {
    localStorage.setItem(this.patientsKey, JSON.stringify(patients));
  }

  addPatient(patient: Patient, patients: Patient[]) {
    patient.id = this.generateId();
    patients.push(patient);
    this.savePatients(patients);
  }

  updatePatient(updatedPatient: Patient, patients: Patient[]) {
    const index = patients.findIndex((p) => p.id === updatedPatient.id);

    if (index !== -1) {
      patients[index] = updatedPatient;
      this.savePatients(patients);
    }
  }

  deletePatient(id: string, patients: Patient[]) {
    const filteredPatients = patients.filter((p) => p.id !== id);
    this.savePatients(filteredPatients);
    return filteredPatients;
  }

  private generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
