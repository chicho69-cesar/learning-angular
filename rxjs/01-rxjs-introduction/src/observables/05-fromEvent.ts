import { fromEvent } from 'rxjs';

/* 
El método fromEvent es un método de creación que crea un observable a 
partir de eventos del DOM. Una vez que se suscribe al observable,
el observable comenzará a emitir eventos cada vez que ocurra el evento 
especificado especificado y los observadores recibirán esos eventos.
*/
const event1$ = fromEvent<PointerEvent>(document, 'click');
const event2$ = fromEvent<KeyboardEvent>(document, 'keyup');

event1$.subscribe((event) => {
  console.log('Coordenadas: ', event.x, event.y);
});

event2$.subscribe((event) => {
  console.log('Tecla: ', event.key);
});
