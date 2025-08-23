/* Cuando algo se extrae directamente de rxjs significa que es 
para crear observables */
import { Observable, Observer } from 'rxjs';

/* 
Un observer es un objeto que tiene 3 propiedades que son funciones
next, error y complete, las cuales van a recibir los datos que emite
el observable con el cual se suscribe.
*/
const observer: Observer<string> = {
  next: (value) => console.log('Next [obs]: ', value),
  error: (error) => console.warn('Error [obs]: ', error),
  complete: () => console.info('Se terminó el observable [obs]'),
}

// Nunca se usa asi
// const observable$ = Observable.create();

const observable$ = new Observable<string>((subscriber) => {
  // Emitimos valores al observable que van a recibir las suscripciones
  subscriber.next('Hola');
  subscriber.next('Mundo');

  // Forzar un error
  // const a: any = undefined;
  // a.name = 'Cesar';

  // Completamos el observable
  subscriber.complete();

  // No se emite nada después de completar
  subscriber.error('Algo salió mal');
  subscriber.next('Ya no se emite');
});

/*
Al suscribirnos a un observable le podemos pasar una función que se 
ejecuta cada vez que el observable emite un valor.
*/
observable$.subscribe((value) => {
  console.log(value);
});

/* 
La forma de mandar tres funciones al suscribirse a un observable esta
depreciada, es mejor usar un observer o simplemente mandar una función
para el next.
*/
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

// Usando un observer
observable$.subscribe(observer);
