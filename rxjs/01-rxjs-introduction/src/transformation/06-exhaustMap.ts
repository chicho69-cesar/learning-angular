import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/* 
El operador exhaustMap ignora las emisiones entrantes mientras la suscripción interna 
(no el observable interno) está activa. En este caso, si haces clic varias veces 
antes de que el intervalo complete sus 3 emisiones, solo se considerará el primer clic.
*/

click$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log);
