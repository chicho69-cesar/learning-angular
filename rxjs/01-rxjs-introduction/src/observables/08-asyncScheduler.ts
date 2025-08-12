import { asyncScheduler } from 'rxjs';

const greeting = () => console.log('Hello world');
const greeting1 = (name: any) => console.log(`Hello ${name}`);
const greeting2 = (user: any) => console.log(`Hello ${user.name} ${user.lastName}`);

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
