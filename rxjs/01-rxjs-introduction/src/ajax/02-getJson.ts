import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

/* 
El método ajax.getJSON realiza una petición HTTP GET a una URL específica
y devuelve un Observable que emite la respuesta JSON, este método acepta
la URL y un objeto de opciones que puede incluir encabezados HTTP.
*/

const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_TOKEN'
});

obs$.subscribe({
  next: (response) => console.log('Response:', response),
  error: (error) => console.error('Error:', error),
  complete: () => console.log('Request completed')
});
