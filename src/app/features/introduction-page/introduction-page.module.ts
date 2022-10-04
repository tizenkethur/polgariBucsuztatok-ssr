import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageComponent } from './introduction-page.component';
import { IntroductionPageRoutingModule } from './introduction-page.routing.module';
import { IntroductionTileComponent } from './introduction-tile/introduction-tile.component';

@NgModule({
  declarations: [IntroductionPageComponent, IntroductionTileComponent],
  imports: [CommonModule, IntroductionPageRoutingModule, SharedModule],
})
export class IntroductionPageModule {}
