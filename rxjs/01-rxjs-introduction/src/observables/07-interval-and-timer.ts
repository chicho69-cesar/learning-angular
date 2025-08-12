import { interval, Observer, timer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Se completo el observable'),
};

const todayInFiveSeconds = new Date();
todayInFiveSeconds.setSeconds(todayInFiveSeconds.getSeconds() + 5);

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(todayInFiveSeconds);

// console.log('Inicio');
// interval$.subscribe(observer);
// console.log('Fin');

console.log('Inicio');
timer$.subscribe(observer);
console.log('Fin');
