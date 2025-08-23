import { of } from 'rxjs';

/*
El método of es un método de creación de observables que emite los valores 
que se le pasan como argumentos. Es decir que crea un observable que emite 
esos valores de manera sincrónica.
*/

// const observable$ = of<number>(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// const observable$ = of<Array<number>>([1, 2, 3, 4, 5]);
// const observable$ = of<number>(...[1, 2, 3, 4, 5], 6, 7, 8, 9, 10);
const observable$ = of<any>(
  [1, 2],
  { a: 1, b: 2 },
  function () { },
  true,
  Promise.resolve(true)
);

/* Of funciona de manera sincrona */
console.log('Inicio del observable');

observable$.subscribe(
  (value) => {
    console.log('Next: ', value);
  },
  (error) => {
    console.warn('Error: ', error);
  },
  () => {
    console.info('Terminamos!');
  }
);

console.log('Fin del observable');
