import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';

import { GithubUser } from '../interfaces/github-user.interface';

// Referencias
const body = document.querySelector('body')!;
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: GithubUser[]) => {
  console.log(users);
  orderList.innerHTML = '';

  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

/* 
El operador mergeAll se encarga de suscribirse a los observables internos que se generan
y emitir sus valores en el observable externo. En este caso, cada vez que el usuario escribe
en el input, se crea un nuevo observable a partir de la llamada AJAX, y mergeAll se encarga
de suscribirse a ese observable y emitir los resultados (los usuarios) en el flujo principal.
Esto permite manejar múltiples solicitudes AJAX de manera eficiente, ya que mergeAll se asegura
de que todas las respuestas se procesen y emitan correctamente, independientemente de
el orden en que se completen las solicitudes.
*/

input$.pipe(
  debounceTime(500),
  pluck('target', 'value'),
  map((text) => ajax.getJSON(
    `https://api.github.com/search/users?q=${text}`
  )),
  mergeAll(),
  pluck('items')
).subscribe({
  next: (users) => showUsers(users as GithubUser[]),
});
