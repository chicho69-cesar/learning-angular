import { catchError, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'chicho69-cesar';

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  // repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe(
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repossss`).pipe(
    catchError((err) => {
      console.warn('Error fetching repos:', err);
      return of([]);
    })
  ),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
}).subscribe({
  next: ({ user, repos, gists }) => {
    console.log('User:', user);
    console.log('Repos:', repos);
    console.log('Gists:', gists);
  },
  error: (err) => {
    console.warn('Error:', err);
  },
});
