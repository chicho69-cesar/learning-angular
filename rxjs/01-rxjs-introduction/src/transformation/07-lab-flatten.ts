import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, exhaustMap, map, pluck, tap } from 'rxjs/operators';

// Helper
const httpLoginRequest = (userPass: { email: string, password: string }) => {
  return ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
      pluck('response', 'token'),
      catchError(() => of(''))
    )
}

// Creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body')!.append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
  .pipe(
    tap((ev) => ev.preventDefault()),
    map((ev) => ({
      email: (ev.target as any)[0].value,
      password: (ev.target as any)[1].value
    })),
    exhaustMap(httpLoginRequest)
  );

submitForm$.subscribe(token => {
  console.log(token);
})
