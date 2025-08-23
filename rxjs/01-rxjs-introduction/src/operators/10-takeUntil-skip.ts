import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body')!.append(button);

const counter$ = interval(1000);

/* 
El operador `skip` se usa para omitir una cantidad específica de emisiones de un observable, 
por ejemplo, en este caso, omite el primer clic del botón.
*/

const buttonClick$ = fromEvent(button, 'click').pipe(
  tap(() => console.log('Button clicked before skip')),
  skip(1),
  tap(() => console.log('Button clicked after skip'))
)

/* 
El operador `takeUntil` se usa para completar un observable cuando otro observable emite un valor.
En este caso, el observable `counter$` se completará cuando se haga clic en el botón.
*/

counter$.pipe(
  takeUntil(buttonClick$),
).subscribe({
  next: (value) => console.log(`Counter: ${value}`),
  complete: () => console.log('Counter completed'),
});
