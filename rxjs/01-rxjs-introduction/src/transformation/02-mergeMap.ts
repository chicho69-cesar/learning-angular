import { fromEvent, interval, of } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letters$ = of('a', 'b', 'c');

/* 
El operador mergeMap recibe una función que retorna un observable, este operador
se suscribe a cada uno de los observables que retorna la función y emite todos los valores
de cada uno de esos observables.

Por ejemplo, en el siguiente código, por cada letra emitida por el observable letters$,
se crea un nuevo observable que emite la letra junto con un número cada segundo,
y se toman solo los primeros 3 valores de cada uno de esos observables.
*/

letters$.pipe(
  mergeMap((letter) => interval(1000).pipe(
    map(i => letter + i),
    take(3)
  ))
).subscribe({
  next: (val) => console.log('next:', val),
  complete: () => console.log('Complete')
});

/* 
En el siguiente ejemplo, se crea un observable que emite eventos de mousedown
y otro que emite eventos de mouseup. También se crea un observable que emite números
cada cierto intervalo de tiempo, entonces mergeMap se usa para iniciar la emisión
del observable de intervalos cada vez que ocurre un evento de mousedown,
y la emisión de esos valores se detiene cuando ocurre un evento de mouseup.
*/

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseup$)
  ))
).subscribe(console.log);
