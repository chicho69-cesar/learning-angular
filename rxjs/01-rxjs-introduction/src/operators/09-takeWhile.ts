import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

/* 
El operador `takeWhile` permite tomar valores de un observable mientras se cumpla una condición.
En este caso, tomamos los eventos de clic del ratón mientras la coordenada y sea menor o igual a 300.
El segundo parámetro `true` indica que el último valor que cumple la condición también se emitirá.
*/

click$.pipe(
  map<MouseEvent, { x: number; y: number }>(({ x, y }) => ({ x, y })),
  // takeWhile(({ y }) => y <= 300),
  takeWhile(({ y }) => y <= 300, true),
).subscribe({
  next: ({ x, y }) => console.log(`Mouse clicked at: (${x}, ${y})`),
  complete: () => console.log('Mouse clicks completed below y=300'),
});
