import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

/* 
El operador debounceTime se utiliza para limitar la cantidad de eventos que se
procesan en un período de tiempo determinado. Es útil para evitar que se
procesen eventos que ocurren demasiado rápido, como clics o pulsaciones de teclas.
*/

// Ejemplo 1
const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(3000)
).subscribe({
  next: (event) => console.log(event),
});

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body')!.append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe({
  next: (value) => {
    console.log('EL VALOR ES: ', value);
  }
})
