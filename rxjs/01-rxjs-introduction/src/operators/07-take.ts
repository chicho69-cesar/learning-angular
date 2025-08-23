import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

/* 
El operador take permite limitar la cantidad de valores emitidos por un Observable.
En este caso, tomamos solo los primeros 3 valores emitidos por el Observable numbers$.
*/

numbers$.pipe(
  tap((value: number) => console.log(`Value emitted: ${value}`)),
  take(3),
).subscribe({
  next: (value: number) => console.log(`Received value: ${value}`),
  complete: () => console.log('Stream completed'),
});
