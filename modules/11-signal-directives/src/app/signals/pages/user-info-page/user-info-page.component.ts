import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'signals-user-info-page',
  standalone: false,
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {
  private usersService = inject(UsersService);

  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  public fullname = computed<string>(() => {
    if (!this.currentUser()) return 'No user';
    return `${this.currentUser()!.first_name} ${this.currentUser()!.last_name}`;
  });

  public ngOnInit(): void {
    this.loadUser(this.userId());
  }

  public loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById(id).subscribe({
      next: (user) => {
        this.userWasFound.set(true);
        this.currentUser.set(user);
      },
      error: () => {
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      },
    });
  }
}
