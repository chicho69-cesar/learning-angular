import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

/* 
El operador auditTime como se propio nombre indica, nos sirve para auditar el
valor emitido por un observable cada cierto tiempo, por ejemplo en el siguiente
caso aunque estemos haciendo clicks continuamente, el operador auditTime nos va
a emitir el último valor emitido cada 5 segundos.
*/

click$.pipe(
  map(({ x }) => x),
  tap((val) => console.log('tap', val)),
  auditTime(5000)
).subscribe(console.log);
