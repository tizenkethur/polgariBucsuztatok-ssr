import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { farewellPerson } from 'src/app/shared/models/farewellPersons';

@Component({
  selector: 'app-introduction-tile',
  templateUrl: './introduction-tile.component.html',
  styleUrls: ['./introduction-tile.component.scss'],
})
export class IntroductionTileComponent {
  @Input()
  personData: farewellPerson;
}
