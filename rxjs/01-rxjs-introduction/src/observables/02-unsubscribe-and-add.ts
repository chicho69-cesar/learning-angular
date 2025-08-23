import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Complete'),
}

const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;

  /* 
  Al usar un setInterval dentro de un Observable, los valores
  se estarán emitiendo indefinidamente, a menos que se llame
  al método complete() o se desuscriba el observer. En este caso
  emitimos valores cada segundo.
  */
  const interval = setInterval(() => {
    subscriber.next(counter);
    console.log('Counter: ', counter);
    counter++;
  }, 1000);

  // Completar la secuencia después de 3 segundos
  setTimeout(() => {
    subscriber.complete();
  }, 3000);

  /* 
  La función que se retorna en el Observable se ejecuta
  cuando se llama al método unsubscribe() del observer.
  En este caso, se limpia el intervalo para evitar que
  siga emitiendo valores después de la desuscripción.
  */
  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  }
});

/* Cuando hacemos un subscribe a un observable, esta función nos regresa 
una Subscription, la cual la podemos usar para desuscribirnos del observable. */
const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

/* 
Nos desuscribimos después de 6 segundos, por lo que el observable
dejará de emitir valores y se limpiará el intervalo. En este caso
se hace la desuscripción de cada una de las suscripciones.
*/
// setTimeout(() => {
//   subscription1.unsubscribe();
//   subscription2.unsubscribe();
//   subscription3.unsubscribe();

//   console.log('Completado');
// }, 6000);

/* 
Podemos agregar una suscripción a otra, de tal manera que al desuscribirnos
de la primera, se desuscriban todas las que hayamos agregado.
*/
subscription1
  .add(subscription2);

subscription1
  .add(subscription3);

setTimeout(() => {
  // Nos desuscribimos de la primera, y con ello de todas las que le agregamos.
  subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log('Completado');
}, 6000);
