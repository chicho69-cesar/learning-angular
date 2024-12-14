import { Component, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [ChartComponent, MatProgressSpinnerModule, MatTabsModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {
  public isVisible = signal(false);
}
