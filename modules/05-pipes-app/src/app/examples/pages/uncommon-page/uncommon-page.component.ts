import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'examples-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Cesar';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  public changeClient(): void {
    this.name = 'Liz';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Liz', 'Cesar', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Cesar',
    age: 23,
    address: 'Aguascalientes, MX'
  };

  // Async Pipe
  public timer$: Observable<number> = interval(2000)
    .pipe(
      tap((value) => console.log('tap', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Cambiamos el nombre');
      console.log('Promise finished');
      this.person.name = 'Cesar Villalobos Olmos';
    }, 3500)
  });
}
