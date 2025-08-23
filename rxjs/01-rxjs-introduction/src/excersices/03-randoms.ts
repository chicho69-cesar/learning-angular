import { interval, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() => {
  const clock$ = interval(1000).pipe(
    take(5),
    map(() => Math.round(Math.random() * 100))
  );

  // Estos dos observables deben de emitir exactamente los mismos valores
  // clock$.subscribe((val) => console.log('obs1', val));
  // clock$.subscribe((val) => console.log('obs2', val));

  const subject$ = new Subject<number>();
  clock$.subscribe(subject$);

  subject$.subscribe((val) => console.log('obs1', val));
  subject$.subscribe((val) => console.log('obs2', val));
})();
