import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import TitleComponent from '../../../shared/components/title/title.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
