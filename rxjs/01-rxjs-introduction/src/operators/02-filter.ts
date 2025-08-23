import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/* range(1, 10)
  .pipe(
    filter((value: number) => value % 2 === 0)
  )
  .subscribe((value: number) => console.log(value)); */

/* 
El operador filter permite filtrar los valores emitidos por un observable
basándose en una condición específica. Solo los valores que cumplen con la condición
son emitidos al suscriptor. En este ejemplo, se filtran los números pares de un rango del 1 al 10.
*/

range(20, 30)
  .pipe(
    filter((value: number, index: number) => {
      console.log('Index: ', index);
      return value % 2 === 0;
    })
  )
  .subscribe((value: number) => console.log(value));

interface Character {
  name: string;
  type: 'hero' | 'villan';
}

const characters: Character[] = [
  {
    name: 'Superman',
    type: 'hero'
  },
  {
    name: 'Batman',
    type: 'hero'
  },
  {
    name: 'Joker',
    type: 'villan'
  }
];

from(characters)
  .pipe(
    filter((character: Character) => character.type === 'hero')
  )
  .subscribe((character: Character) => console.log(character));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(
    map((event: KeyboardEvent) => event.code),
    filter((key: string) => key === 'Enter'),
  );

keyup$.subscribe(console.log);
