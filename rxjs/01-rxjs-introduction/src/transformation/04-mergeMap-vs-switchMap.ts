import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

/* 
La principal diferencia entre switchMap y mergeMap es que switchMap cancela
la suscripción anterior cuando llega un nuevo valor, mientras que mergeMap mantiene
todas las suscripciones activas y combina sus emisiones.
*/

click$.pipe(
  switchMap(() => interval$),
  // mergeMap( () => interval$ ),
)//.subscribe(console.log);

click$.pipe(
  // switchMap( () => interval$ ),
  mergeMap(() => interval$),
).subscribe(console.log);
