import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'store-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './store-layout.component.html',
  styleUrl: './store-layout.component.css'
})
export class StoreLayoutComponent {

}
