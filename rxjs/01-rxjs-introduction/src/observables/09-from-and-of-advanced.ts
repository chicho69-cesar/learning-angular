import { from, Observer, of } from 'rxjs';

/* 
* of: Toma argumentos y genera un observable
* from: array, promise, iterable, observable
* fromEvent: dom
* fromFetch: fetch
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
