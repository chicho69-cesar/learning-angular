import { combineLatest, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//   keyup$.pipe(pluck('type')),
//   click$.pipe(pluck('type'))
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input1.type = 'email';

input2.placeholder = '*********';
input2.type = 'password';

document.querySelector('body')!.append(input1, input2);

const getInputStream = (input: HTMLElement) => {
  return fromEvent<KeyboardEvent>(input, 'keyup').pipe(
    pluck('target', 'value')
  );
}

/* 
El método combineLatest toma múltiples observables y emite un valor 
cuando todos los observables han emitido al menos un valor, de ahí en 
adelante emitirá un valor cada vez que cualquiera de los observables 
emita un nuevo valor. En este caso, se combinan los valores de los
inputs de email y contraseña, y se emiten juntos como un array.
*/

combineLatest(
  getInputStream(input1),
  getInputStream(input2)
).subscribe(([email, password]) => {
  console.log('Email:', email);
  console.log('Password:', password);
});
