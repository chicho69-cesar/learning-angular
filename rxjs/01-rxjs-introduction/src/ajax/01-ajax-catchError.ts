import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

// const fetchUsers = fetch(url)

// fetchUsers
//   .then((response) => response.json())
//   .then((data) => console.log('Users:', data))
//   .catch((error) => console.warn('Error fetching users:', error));

// fetchUsers
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.statusText}`);
//     }

//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log('Users:', data))
//   .catch((error) => console.warn('Error fetching users:', error));

/* 
Ajax es una librería de RxJS que permite realizar peticiones HTTP de 
manera reactiva. Con esta librería, puedes manejar las respuestas y errores
de las peticiones de forma más sencilla y elegante, utilizando operadores
como `pluck` para extraer datos específicos de la respuesta y `catchError`
para manejar errores de manera reactiva.
*/

ajax(url).pipe(
  pluck('response'),
  catchError((error: AjaxError) => {
    console.warn('Error fetching users:', error);
    return of([]);
  })
).subscribe({
  next: (users) => console.log('Users:', users),
  error: (error) => console.warn('Error in subscription:', error),
  complete: () => console.log('Request completed')
});
