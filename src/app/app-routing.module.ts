import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'fooldal', pathMatch: 'full' },
  {
    path: 'fooldal',
    loadChildren: () =>
      import('../app/features/main-page/main.module').then((m) => m.MainModule),
  },
  {
    path: 'bemutatkozas',
    loadChildren: () =>
      import('../app/features/introduction-page/introduction-page.module').then(
        (m) => m.IntroductionPageModule
      ),
  },
  {
    path: 'bemutatkozas/:name',
    loadChildren: () =>
      import('../app/features/personal/personal.module').then(
        (m) => m.PersonalModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
