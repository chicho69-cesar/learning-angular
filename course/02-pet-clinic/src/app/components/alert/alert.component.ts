import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() alert!: Alert;

  get isError() {
    return this.alert.type === 'error';
  }
}
