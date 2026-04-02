import { bootstrapApplication } from '@angular/platform-browser';
import { register as registerSwiperElements } from 'swiper/element/bundle';

import { App } from './app/app.component';
import { appConfig } from './app/app.config';

registerSwiperElements();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
