import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css'
})
export class OutputChildComponent {
  public add = output<void>();
  public delete = output<number>();

  public onAdd() {
    this.add.emit();
  }

  public onDelete() {
    this.delete.emit(0);
  }
}
