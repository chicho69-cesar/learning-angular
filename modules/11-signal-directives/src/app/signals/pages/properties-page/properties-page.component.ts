import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-properties-page',
  standalone: false,
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnInit, OnDestroy {
  public counter = signal(10);
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public fullname = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  public ngOnInit(): void {
    setInterval(() => {
      this.counter.update((current) => current + 1);

      // if (this.counter() === 15) {
      //   this.userChangedEffect.destroy();
      // }
    }, 1000);
  }

  public ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  public changeBy(value: number) {
    this.counter.update((current) => current + value);
  }

  public onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });

    // this.user.update((current) => {
    //   ...current,
    //   [field]: value
    // });

    this.user.update((current) => {
      switch (field) {
        case 'email':
          return {
            ...current,
            email: value
          };

        case 'avatar':
          return {
            ...current,
            avatar: value
          };

        case 'first_name':
          return {
            ...current,
            first_name: value
          };

        case 'last_name':
          return {
            ...current,
            last_name: value
          };

        case 'id':
          return {
            ...current,
            id: Number(value)
          };
      }
    });
  }
}
