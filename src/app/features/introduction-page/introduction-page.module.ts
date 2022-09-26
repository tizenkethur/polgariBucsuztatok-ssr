import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageComponent } from './introduction-page.component';
import { IntroductionPageRoutingModule } from './introduction-page.routing.module';

@NgModule({
  declarations: [IntroductionPageComponent],
  imports: [CommonModule, IntroductionPageRoutingModule, SharedModule],
})
export class IntroductionPageModule {}
