import { interval, map, takeWhile } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  const start = 7;
  const countdown$ = interval(700).pipe(
    map((value) => start - value),
    takeWhile((value) => value >= 0)
  );

  countdown$.subscribe(console.log);
})();
