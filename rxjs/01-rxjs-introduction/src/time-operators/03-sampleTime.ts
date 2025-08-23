import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

/* 
El operador sampleTime en RxJS emite el valor más reciente de un observable
cada cierto intervalo de tiempo especificado. En este caso, se utiliza para
emitir la posición del clic del ratón cada 2 segundos (2000 milisegundos).
*/

click$.pipe(
  sampleTime(2000),
  map(({ x, y }) => ({ x, y })),
).subscribe(console.log);
