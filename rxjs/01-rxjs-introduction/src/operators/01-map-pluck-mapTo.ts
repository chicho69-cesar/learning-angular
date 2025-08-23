import { fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1, 5)
//   .pipe(
//     map<number, number>((val) => val * 10)
//   )
//   .subscribe((val) => console.log(val));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

/* 
Cuando queremos manipular un valor que fluye a través de un observable, 
podemos utilizar operadores, los operadores son funciones que toman
un observable y devuelven un nuevo observable con los valores transformados.

Para aplicar un operador, usamos el método `pipe` del observable original.
*/

/* 
El operador `map` transforma cada valor emitido por el observable original
aplicando una función a cada uno de ellos. Por ejemplo, si tenemos un observable
que emite números y queremos multiplicarlos por 10, podemos usar `map` para
lograrlo.
*/

const keyupMap$ = keyup$.pipe(
  map((event) => event.code)
);

/*
El operador `pluck` es una forma más concisa de acceder a una propiedad específica
de un objeto emitido por el observable. Por ejemplo, si queremos obtener el valor
de la propiedad `key` de un evento de teclado, podemos usar `pluck` para extraerlo.
*/

const keyupPluck$ = keyup$.pipe(
  // pluck('key')
  pluck('target', 'baseURI')
);

/*
El operador `mapTo` es similar a `map`, pero en lugar de aplicar una función
a cada valor emitido, simplemente emite un valor constante. Por ejemplo, si
queremos que cada vez que se presione una tecla se emita el mismo valor,
podemos usar `mapTo`.
*/

const keyupMapTo$ = keyup$.pipe(
  mapTo('Tecla presionada')
);

keyupMap$.subscribe((code) => console.log('Map: ', code));
keyupPluck$.subscribe((key) => console.log('Pluck: ', key));
keyupMapTo$.subscribe((key) => console.log('MapTo: ', key));
