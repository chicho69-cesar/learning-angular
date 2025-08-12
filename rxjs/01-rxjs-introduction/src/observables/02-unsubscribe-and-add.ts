import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Complete'),
}

const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;

  const interval = setInterval(() => {
    subscriber.next(counter);
    console.log('Counter: ', counter);
    counter++;
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 3000);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  }
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

// setTimeout(() => {
//   subscription1.unsubscribe();
//   subscription2.unsubscribe();
//   subscription3.unsubscribe();

//   console.log('Completado');
// }, 6000);

subscription1
  .add(subscription2);

subscription1
  .add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log('Completado');
}, 6000);
