import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

/* 
El método merge combina múltiples Observables en uno solo.
En este caso, combina los eventos de teclado y clic del documento, de esta
forma cada vez que se produzca un evento de teclado o clic, se emitirá un valor.
*/

merge(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))
).subscribe(console.log);
