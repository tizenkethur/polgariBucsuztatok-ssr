import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
