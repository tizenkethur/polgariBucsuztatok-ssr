import { IntroductionPageComponent } from './introduction-page.component';
import { PersonalComponent } from '../personal/personal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IntroductionPageComponent,
    // children: [{ path: '/:id', component: PersonalComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductionPageRoutingModule {}
