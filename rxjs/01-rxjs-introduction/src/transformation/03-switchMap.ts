import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, pluck, switchMap } from 'rxjs/operators';

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
El operador switchMap lo que hace es cancelar la petición anterior y hacer una nueva petición
cada vez que se emite un nuevo valor en el observable de origen.
Esto es útil en casos como este, donde el usuario puede estar escribiendo rápidamente
y no queremos saturar el servidor con múltiples peticiones.
*/

input$.pipe(
  debounceTime(500),
  pluck('target', 'value'),
  switchMap((text) => ajax.getJSON(
    `https://api.github.com/search/users?q=${text}`
  )),
  pluck('items')
)/* .subscribe({
  next: (users) => showUsers(users as GithubUser[]),
}); */

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck('target', 'value'),
  switchMap((text) => ajax.getJSON(url + text))
).subscribe(console.log);
