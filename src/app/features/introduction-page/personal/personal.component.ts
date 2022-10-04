import { Component, Input } from '@angular/core';
import { farewellPerson } from 'src/app/shared/models/farewellPersons';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  @Input()
  personData: farewellPerson;
}
