import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinxx.org/delay/1';

const handleError = (error: AjaxError) => {
  console.warn('Error occurred:', error.message);

  return of({
    ok: false,
    users: []
  });
}

// const obs1$ = ajax.getJSON(url).pipe(
//   catchError(handleError)
// );

// const obs2$ = ajax(url).pipe(
//   catchError(handleError)
// );

// obs1$.subscribe({
//   next: (response) => console.log('Response from getJSON:', response),
//   error: (error) => console.error('Error from getJSON:', error),
//   complete: () => console.log('getJSON request completed')
// });

// obs2$.subscribe({
//   next: (response) => console.log('Response from ajax:', response),
//   error: (error) => console.error('Error from ajax:', error),
//   complete: () => console.log('ajax request completed')
// });

/* 
La principal diferencia entre `ajax.getJSON` y `ajax` es que `ajax.getJSON`
realiza una petición HTTP GET y espera que la respuesta sea un JSON,
mientras que `ajax` es más general y puede realizar peticiones de diferentes tipos
y manejar diferentes formatos de respuesta. Además, `ajax` permite más configuraciones
como el método HTTP, los encabezados, el cuerpo de la petición, etc.
*/

const obs1$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs1$.pipe(
  catchError(handleError)
).subscribe({
  next: (response) => console.log('Response from getJSON:', response),
  error: (error) => console.error('Error from getJSON:', error),
  complete: () => console.log('getJSON request completed')
});

obs2$.pipe(
  catchError(handleError)
).subscribe({
  next: (response) => console.log('Response from ajax:', response),
  error: (error) => console.error('Error from ajax:', error),
  complete: () => console.log('ajax request completed')
});
