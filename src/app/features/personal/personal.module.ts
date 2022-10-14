import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AngMusicPlayerModule } from 'ang-music-player';
@NgModule({
  declarations: [PersonalComponent],
  imports: [
    SharedModule,
    CommonModule,
    PersonalRoutingModule,
    YouTubePlayerModule,
    AngMusicPlayerModule,
  ],
})
export class PersonalModule {}
