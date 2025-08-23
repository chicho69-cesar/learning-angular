import { asyncScheduler, range } from 'rxjs';

/* 
EL método range es un método de creación que crea un observable que emite 
una secuencia de números enteros en un rango especificado. El primer 
argumento es el valor inicial y el segundo es la cantidad de números a emitir.
Si se especifica un tercer argumento, se utilizará como programador para
la emisión de los valores, lo que permite que la emisión sea asíncrona.
*/

/* El primer elemento es donde comienza, y el segundo el numero de 
emisiones, es decir aquí de 1 a 10 y en el segundo de -5 a 4 */
const src1$ = range(1, 10);
const src2$ = range(-5, 10);

console.log('Inicio');
src1$.subscribe(console.log);
console.log('Fin');

console.log('Inicio');
src2$.subscribe(console.log);
console.log('Fin');

/* Range asíncrono */
const srcAsync$ = range(1, 5, asyncScheduler);

console.log('Inicio');
srcAsync$.subscribe(console.log);
console.log('Fin');
