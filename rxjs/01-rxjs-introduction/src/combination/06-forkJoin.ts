import { forkJoin, interval, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000).pipe(take(5));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

/* 
El método forkJoin se utiliza para combinar múltiples observables y esperar a 
que todos ellos completen, una vez que todos los observables hayan emitido
su último valor, forkJoin emitirá un único valor que es un array o un objeto
con los últimos valores emitidos por cada observable.
*/

// forkJoin(
//   numbers$,
//   interval$,
//   letters$
// ).subscribe(console.log)

// forkJoin(
//   numbers$,
//   interval$,
//   letters$
// ).subscribe((resp) => {
//   console.log('Números: ', resp[0])
//   console.log('Intervalo: ', resp[1])
//   console.log('Letras: ', resp[2])
// });

// forkJoin({
//   numbers$,
//   interval$,
//   letters$
// }).subscribe((resp) => {
//   console.log(resp);
// });

forkJoin({
  num: numbers$,
  int: interval$,
  let: letters$
}).subscribe((resp) => {
  console.log(resp);
});
