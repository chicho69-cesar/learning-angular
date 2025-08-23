import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = range(1, 5);

/* 
El operador tap permite realizar efectos secundarios en los valores emitidos por un observable,
es decir, tap ejecuta una función con la cual podemos observar los valores que están 
pasando por el observable sin modificar el flujo de datos.
En este ejemplo, se utiliza para imprimir los valores antes y después de aplicar el operador map.
*/

numbers$
  .pipe(
    tap((value: number) => console.log('Before: ', value)),
    map((value: number) => value * 10),
    tap({
      next: (value: number) => console.log('After: ', value),
      complete: () => console.info('Complete')
    })
  )
  .subscribe((value: number) => console.log('Subs: ', value));
