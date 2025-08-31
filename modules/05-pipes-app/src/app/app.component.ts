import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private readonly primengConfig: PrimeNG
  ) { }

  public ngOnInit(): void {
    this.primengConfig.ripple.set(true);
  }
}
