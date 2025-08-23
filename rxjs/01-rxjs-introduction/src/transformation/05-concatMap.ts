import { fromEvent, interval, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/* 
El operador concatMap mapea cada uno de los valores emitidos por el observable origen
a un observable interno (en este caso interval$) y los concatena, es decir,
espera a que el observable interno complete antes de suscribirse al siguiente.
*/

click$.pipe(
  concatMap(() => interval$)
).subscribe(console.log);

const numbers$ = of(1, 2, 3);
const letters$ = of('a', 'b', 'c');

numbers$.pipe(
  concatMap((num) => of(num * 10)),
  concatMap((num) => letters$.pipe(
    concatMap((letter) => of(letter.toUpperCase() + num))
  ))
).subscribe(console.log);
