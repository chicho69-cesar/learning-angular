import { fromEvent } from 'rxjs';

const event1$ = fromEvent<PointerEvent>(document, 'click');
const event2$ = fromEvent<KeyboardEvent>(document, 'keyup');

event1$.subscribe((event) => {
  console.log('Coordenadas: ', event.x, event.y);
});

event2$.subscribe((event) => {
  console.log('Tecla: ', event.key);
});
