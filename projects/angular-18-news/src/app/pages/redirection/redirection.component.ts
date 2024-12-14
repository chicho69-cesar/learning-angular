import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirection',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './redirection.component.html',
  styleUrl: './redirection.component.css'
})
export class RedirectionComponent {
  private _router = inject(Router);

  navigate(id: number) {
    this._router.navigate(['/last-detail', id]);
  }
}
