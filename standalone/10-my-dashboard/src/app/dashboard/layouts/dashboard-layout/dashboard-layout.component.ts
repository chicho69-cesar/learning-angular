import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import SidemenuComponent from '../../../shared/components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export default class DashboardLayoutComponent { }
