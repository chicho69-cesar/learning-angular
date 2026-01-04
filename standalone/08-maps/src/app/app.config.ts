import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // Hash Location Strategy for routing
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ]
};
