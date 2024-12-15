import { Component, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, OutputChildComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  public badge = signal<number>(0);
  public hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  handleAdd() {
    this.badge.update((value: number) => value + 1);
  }

  handleDelete(value: number) {
    this.badge.update(() => value);
  }
}
