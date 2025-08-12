/* Cuando algo se extrae directamente de rxjs significa que es 
para crear observables */
import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: (value) => console.log('Next [obs]: ', value),
  error: (error) => console.warn('Error [obs]: ', error),
  complete: () => console.info('Se terminó el observable [obs]'),
}

// Nunca se usa asi
// const observable$ = Observable.create();

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next('Hola');
  subscriber.next('Mundo');

  // Forzar un error
  // const a: any = undefined;
  // a.name = 'Cesar';

  subscriber.complete();

  subscriber.next('Ya no se emite');
});

observable$.subscribe((value) => {
  console.log(value);
});

observable$.subscribe(
  (value) => {
    console.log('Next: ', value);
  },
  (error) => {
    console.warn('Error: ', error);
  },
  () => {
    console.info('Se terminó el observable');
  }
);

observable$.subscribe(observer);
