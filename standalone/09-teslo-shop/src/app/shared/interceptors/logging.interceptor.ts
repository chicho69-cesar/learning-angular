import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('%c[Logging Interceptor] Response received:', 'color: green; font-weight: bold;', req.url + ' - Status:', event.status);
        }
      })
    );
};
