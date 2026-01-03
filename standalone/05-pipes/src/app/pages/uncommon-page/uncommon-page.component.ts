import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { interval, map, tap } from 'rxjs';

import { CardComponent } from '../../components/card/card.component';

const client1 = {
  name: 'Cesar',
  gender: 'male',
  age: 24,
  address: 'Villa Hidalgo, Jalisco, México',
};

const client2 = {
  name: 'Liz',
  gender: 'female',
  age: 23,
  address: 'Aguascalientes, México',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nPluralPipe,
    I18nSelectPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export default class UncommonPageComponent {
  public client = signal(client1);

  public clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  });

  public clients = signal([
    'Cesar',
    'Liz',
    'Karen',
    'Carolina',
    'Alonso',
    'Ariel',
    'Joss',
    'Miguel',
  ]);

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public profile = {
    name: 'Cesar',
    age: 24,
    address: 'Villa Hidalgo, Jalisco, México',
  };

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promise resolved');
    }, 3500);
  });

  public myObservable = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Observable emitted value:', value)),
  );

  public changeClient(): void {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  public deleteClient(): void {
    this.clients.update((prev) => prev.slice(1));
  }
}
