import { from, Observer } from 'rxjs';

/* 
* of: Toma argumentos y genera un observable
* from: array, promise, iterable, observable
* fromEvent: dom
* fromFetch: fetch
*/

/* 
La función from crea un observable a partir de un iterable, una promesa, 
un array, un objeto iterable o un observable, es decir, esta función nos 
permite convertir diferentes tipos de datos en un observable que podemos suscribirnos.

Su principal diferencia con of es que of emite los valores tal cual los recibe,
mientras que from crea un observable que emite los valores de un iterable o una promesa uno por uno,
lo que permite manejar flujos de datos más complejos y asíncronos.
*/

const observer: Observer<any> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Complete'),
}

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const myIterable = myGenerator();

// for (let value of myIterable) {
//   console.log('Value: ', value);
// }

from(myIterable).subscribe(observer);

// const sources$ = from([1, 2, 3, 4, 5]);
// const sources$ = of(...[1, 2, 3, 4, 5]);

// const sources$ = from('Cesar');

const sources$ = from(fetch('https://api.github.com/users/chicho69-cesar'));

sources$.subscribe(async (response) => {
  console.log(response);

  const data = await response.json();
  console.log('DATA: ', data);
});

sources$.subscribe(observer);
