import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/home-page/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
  },
];
