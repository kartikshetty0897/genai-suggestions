import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RatingAndFeedbackComponent } from './pages/rating-and-feedback/rating-and-feedback.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'feedback-submit',
    component: RatingAndFeedbackComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
