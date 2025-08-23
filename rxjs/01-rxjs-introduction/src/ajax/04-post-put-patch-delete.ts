import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.post(
  url,
  {
    id: 1,
    name: 'Cesar Villalobos Olmos',
    age: 23,
  },
  {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 1234567890',
  },
).subscribe({
  next: (response) => console.log('Response post:', response),
  error: (error) => console.error('Error post:', error)
});

ajax.put(
  url,
  {
    id: 1,
    name: 'Cesar Villalobos Olmos',
    age: 24,
  },
  {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 1234567890',
  },
).subscribe({
  next: (response) => console.log('Response put:', response),
  error: (error) => console.error('Error put:', error)
});

ajax.patch(
  url,
  {
    age: 23,
  },
  {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 1234567890',
  },
).subscribe({
  next: (response) => console.log('Response patch:', response),
  error: (error) => console.error('Error patch:', error)
});

ajax({
  url,
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 1234567890',
  },
}).subscribe({
  next: (response) => console.log('Response delete:', response),
  error: (error) => console.error('Error delete:', error)
});
