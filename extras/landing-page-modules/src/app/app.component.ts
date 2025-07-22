import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public menuOption: string = '';

  selectOption(option: string) {
    this.menuOption = option;
  }
}
