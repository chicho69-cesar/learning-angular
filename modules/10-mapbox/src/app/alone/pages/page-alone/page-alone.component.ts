import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [
    CounterAloneComponent,
    SideMenuComponent,
  ],
  templateUrl: './page-alone.component.html',
  styleUrl: './page-alone.component.css'
})
export class PageAloneComponent {

}
