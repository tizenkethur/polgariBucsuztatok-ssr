import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('../app/features/main-page/main.module').then((m) => m.MainModule),
  },
  {
    path: 'introduction',
    loadChildren: () =>
      import('../app/features/introduction-page/introduction-page.module').then(
        (m) => m.IntroductionPageModule
      ),
  },
  {
    path: 'introduction/:name',
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
