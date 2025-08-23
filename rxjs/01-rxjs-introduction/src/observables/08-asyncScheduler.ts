import { asyncScheduler } from 'rxjs';

const greeting = () => console.log('Hello world');
const greeting1 = (name: any) => console.log(`Hello ${name}`);
const greeting2 = (user: any) => console.log(`Hello ${user.name} ${user.lastName}`);

/* 
La función asyncScheduler es un programador de tareas que permite ejecutar
funciones de manera asíncrona, similar a setTimeout o setInterval, pero con 
la capacidad de cancelar tareas programadas.

La función asyncScheduler.schedule permite programar una tarea para que se ejecute
después de un cierto tiempo o de manera repetitiva, y se puede cancelar la tarea
con el método unsubscribe de la suscripción que devuelve.
*/

// Timeout
asyncScheduler.schedule(greeting, 1000);
asyncScheduler.schedule(greeting1, 2000, 'Cesar');
asyncScheduler.schedule(greeting2, 3000, { name: 'Cesar', lastName: 'Villalobos Olmos' });

// Interval
const subscription = asyncScheduler.schedule(function (state: any) {
  console.log('State: ', state);

  this.schedule(state + 1, 1000);
}, 1000, 0);

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 10000);

asyncScheduler.schedule(() => subscription.unsubscribe(), 10000);
