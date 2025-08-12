import { asyncScheduler, range } from 'rxjs';

/* El primer elemento es donde comienza, y el segundo el numero de 
emiciones, es decir aqui de 1 a 10 y en el segundo de -5 a 4 */
const src1$ = range(1, 10);
const src2$ = range(-5, 10);

console.log('Inicio');
src1$.subscribe(console.log);
console.log('Fin');

console.log('Inicio');
src2$.subscribe(console.log);
console.log('Fin');

/* Range asincrono */
const srcAsync$ = range(1, 5, asyncScheduler);

console.log('Inicio');
srcAsync$.subscribe(console.log);
console.log('Fin');
