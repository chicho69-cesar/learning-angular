import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

/* 
El operador sample es un poco especial, ya que este operador va a emitir los 
valores del observable fuente, en este caso interval$, cada vez que el observable
que le pasemos como argumento emita un valor, en este caso click$, aunque el observable
fuente este emitiendo valores constantemente, la suscripción solo recibirá los 
valores el segundo observable emita un valor.
*/

interval$.pipe(
  sample(click$)
).subscribe(console.log);
