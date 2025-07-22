import { ErrorHandler, inject } from '@angular/core';
import { Routes } from '@angular/router';

import { ContentComponent } from './pages/content/content.component';
import { DeferComponent } from './pages/defer/defer.component';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './pages/signals/input/input.component';
import { ModelInputsComponent } from './pages/signals/model-inputs/model-inputs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OptimizedImageComponent } from './pages/optimized-image/optimized-image.component';
import { OutputComponent } from './pages/signals/output/output.component';
import { QueriesComponent } from './pages/signals/queries/queries.component';
import { RedirectionComponent } from './pages/redirection/redirection.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'signals',
    children: [
      {
        path: 'inputs', component: InputComponent
      },
      {
        path: 'outputs', component: OutputComponent
      },
      {
        path: 'queries', component: QueriesComponent
      },
      {
        path: 'model-inputs', component: ModelInputsComponent
      },
    ]
  },
  { path: 'content', component: ContentComponent },
  { path: 'optimized-image', component: OptimizedImageComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'redirection', component: RedirectionComponent },
  {
    path: 'last-detail/:id', redirectTo: ({ params }) => {
      const errorHandler = inject(ErrorHandler);
      const userIdParam = params['id'];

      if (userIdParam != 3) {
        return `/user-detail/${userIdParam}`;
      } else {
        errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
        return `/not-found`;
      }
    },
  },
  { path: 'user-detail/:id', component: UserDetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
