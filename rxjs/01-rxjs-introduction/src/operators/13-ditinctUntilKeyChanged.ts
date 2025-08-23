import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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

/* 
El operador distinctUntilKeyChanged permite filtrar los valores emitidos por un observable,
de tal manera que solo se emiten aquellos valores cuyo valor de una clave específica ha cambiado desde la última emisión.
En este caso, estamos filtrando los personajes por su nombre, de modo que solo se emiten 
personajes con nombres únicos consecutivos.
*/

from(characters).pipe(
  distinctUntilKeyChanged('name')
).subscribe(console.log);
