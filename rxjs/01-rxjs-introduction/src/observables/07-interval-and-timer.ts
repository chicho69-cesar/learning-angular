import { interval, Observer, timer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Se completo el observable'),
};

const todayInFiveSeconds = new Date();
todayInFiveSeconds.setSeconds(todayInFiveSeconds.getSeconds() + 5);

/* 
El observable interval emite un valor cada cierto tiempo, en este caso
cada segundo (1000 milisegundos) estará emitiendo un valor, el cual es 
el contador de veces que ha emitido un valor.
*/

const interval$ = interval(1000);

/*
Por otro lado, el observable timer emite un valor después de un tiempo determinado,
en este caso 2000 milisegundos (2 segundos) y luego emite un valor cada segundo.
Si se le pasa un segundo parámetro, este será el intervalo entre emisiones.
*/

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(todayInFiveSeconds);

// console.log('Inicio');
// interval$.subscribe(observer);
// console.log('Fin');

console.log('Inicio');
timer$.subscribe(observer);
console.log('Fin');
