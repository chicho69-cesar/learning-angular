import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

from(numbers).pipe(
  reduce((acc, value) => acc + value, 0),
).subscribe({
  next: (result) => console.log('Sum of numbers with reduce: ', result),
});

/*
El operador scan es similar a reduce, pero emite el valor acumulado en cada paso.
Esto permite ver el estado intermedio de la acumulación, es decir, con reduce unicamente
obtenemos el resultado final, mientras que con scan obtenemos todos los estados intermedios.
Por lo tanto, scan es útil para mantener un estado a lo largo del tiempo en una secuencia de eventos.
*/

from(numbers).pipe(
  scan((acc, value) => acc + value, 0),
).subscribe({
  next: (result) => console.log('Sum of numbers with scan: ', result),
});

interface User {
  id?: string;
  authenticated?: boolean;
  token?: string | null;
  age?: number;
}

const userStates: User[] = [
  { id: 'chicho69-cesar', authenticated: false, token: null },
  { id: 'chicho69-cesar', authenticated: true, token: 'ABC' },
  { id: 'chicho69-cesar', authenticated: true, token: 'ABC123' },
];

const state$ = from(userStates).pipe(
  scan<User>((acc, cur) => {
    return { ...acc, ...cur }
  })
);

const id$ = state$.pipe(
  map((state) => state.token)
);

id$.subscribe(console.log);
