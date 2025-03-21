import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'article/:id',
    component: ArticlePageComponent,
  },
  {
    path: 'inscription',
    component: SignUpPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];
