import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

/*
El operador throttleTime nos permite controlar la frecuencia con la que se 
emiten los valores de un observable. Este operador emite el primer valor
inmediatamente y luego ignora los valores subsiguientes durante un período
de tiempo especificado. Esto es útil para evitar la sobrecarga de eventos
o para limitar la cantidad de veces que se procesa una acción en un
intervalo de tiempo determinado.
*/

// Ejemplo 1
const click$ = fromEvent(document, 'click');

click$.pipe(
  throttleTime(3000)
).subscribe({
  next: (event) => console.log(event),
});

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body')!.append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
  throttleTime(400, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe({
  next: (value) => {
    console.log('EL VALOR ES: ', value);
  }
})
