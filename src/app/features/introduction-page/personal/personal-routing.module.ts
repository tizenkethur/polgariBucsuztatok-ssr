import { PersonalComponent } from './personal.component';
import { IntroductionPageComponent } from './../introduction-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IntroductionPageComponent,
    children: [
      { path: '1', component: PersonalComponent },
      { path: '2', component: PersonalComponent},
      { path: '3', component: PersonalComponent },
      { path: '4', component: PersonalComponent },
      { path: '5', component: PersonalComponent },
      { path: '6', component: PersonalComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
