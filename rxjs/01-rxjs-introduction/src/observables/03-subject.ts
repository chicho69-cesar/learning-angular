import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Se completo el observable')
}

const interval$ = new Observable<number>((subscriber) => {
  const intervalId = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('Intervalo destruido');
  }
});

/* const subscription1 = interval$.subscribe((value) => {
  console.log('Sub 1: ', value);
});

const subscription2 = interval$.subscribe((value) => {
  console.log('Sub 2: ', value);
}); */

/* 
* 1.- Casteo multiple
* 2.- También es un observer
* 3.- Next, Error y Complete
*/
const subject$ = new Subject<number>();
const intervalSubscription = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  /* Cuando la data es producida por el observable en si mismo,
  es considerado como un "Cold Observable". Pero cuando la data
  es producida fuera del observable es llamado "Hot Observable" */

  subject$.next(10);
  subject$.complete();

  intervalSubscription.unsubscribe();
}, 5500);
