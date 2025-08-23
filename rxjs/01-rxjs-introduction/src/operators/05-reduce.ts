import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const numbersReduced = numbers.reduce((accumulate: number, current: number) => {
  return accumulate + current;
}, 0);

console.log('Reduced value:', numbersReduced);

/* 
El operador reduce se utiliza de forma similar a la función reduce de los arrays,
pero en este caso se aplica a un flujo de datos (observable).
El operador reduce toma un acumulador y un valor actual, y devuelve un único valor
al final del flujo.
*/

interval(500).pipe(
  take(5),
  tap((value: number) => console.log('Current value:', value)),
  reduce((accumulate: number, current: number) => {
    return accumulate + current;
  }, 0)
).subscribe({
  next: (value: number) => {
    console.log('Reduced value from interval:', value);
  }
});
