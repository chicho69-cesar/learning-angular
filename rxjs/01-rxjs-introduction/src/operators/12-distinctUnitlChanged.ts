import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

/* 
El operador distinctUntilChanged se utiliza para filtrar valores consecutivos 
que son iguales, permitiendo que solo el primer valor de una secuencia de valores duplicados se emita.
Pero a diferencia de distinct, este operador no elimina todos los duplicados,
sino que solo los consecutivos.
*/

numbers$.pipe(
  distinctUntilChanged()
).subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  {
    name: 'Megaman'
  },
  {
    name: 'X'
  },
  {
    name: 'Zero'
  },
  {
    name: 'Dr. Willy'
  },
  {
    name: 'X'
  },
  {
    name: 'Megaman'
  },
  {
    name: 'Zero'
  },
];

from(characters).pipe(
  distinctUntilChanged((previous: Character, current: Character) => previous.name === current.name)
).subscribe(console.log);
