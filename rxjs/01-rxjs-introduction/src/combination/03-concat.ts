import { concat, interval, of } from "rxjs";
import { take } from "rxjs/operators";

const interval$ = interval(1000);

/*
El método concat permite combinar múltiples Observables de manera secuencial,
es decir, el segundo Observable no comenzará a emitir valores hasta que el primero haya completado.
En este ejemplo, concatenamos un Observable que emite valores cada segundo,
un Observable que emite los primeros 3 valores de ese intervalo,
y un Observable que emite los primeros 2 valores del mismo intervalo,
y finalmente un Observable que emite el valor 1.
El resultado será que se emitirán los valores del primer Observable, después los 
del segundo y finalmente el valor 1.
*/

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  of(1)
).subscribe(console.log);
