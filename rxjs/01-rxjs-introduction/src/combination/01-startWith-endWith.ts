import { endWith, of, startWith } from 'rxjs';

/* 
El método startWith lo que nos permite es emitir valores antes de que se emitan
los valores del observable, antes de que la suscripción reciba los valores del
observable va a recibir los valores que le pasemos a startWith.

El método endWith lo que nos permite es emitir valores después de que se hayan
emitido los valores del observable, después de que la suscripción reciba los
valores del observable va a recibir los valores que le pasemos a endWith.
*/

const numbers$ = of(1, 2, 3).pipe(
  startWith('a', 'b', 'c'),
  endWith('x', 'y', 'z')
);

numbers$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed')
});
