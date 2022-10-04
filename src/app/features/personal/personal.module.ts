import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PersonalComponent],
  imports: [SharedModule, CommonModule, PersonalRoutingModule],
})
export class PersonalModule {}
