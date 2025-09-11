import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { UsersService } from '../../../services/users.service';
import TitleComponent from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User| undefined>(undefined);
  public user = toSignal(
    this.route.params
      .pipe(
        switchMap(({ id }) => this.usersService.getUserById(id))
      )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return 'Información del usuario';
  });

  // constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log({params});
  //   })
  // }
}
