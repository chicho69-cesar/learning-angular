import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

/* 
El operador first toma el primer valor que emite el observable el cual cumple
con la condición especificada. Si no se encuentra ningún valor que cumpla
con la condición, se lanzará un error.
*/

click$.pipe(
  tap<MouseEvent>((event) => console.log('Click event:', event)),
  map<MouseEvent, { x: number; y: number }>((event) => ({
    x: event.clientX,
    y: event.clientY,
  })),
  first<{ x: number, y: number }>((event) => event.y >= 150)
).subscribe({
  next: (value) => console.log('First click with y >= 150:', value),
  complete: () => console.log('Completed'),
});
