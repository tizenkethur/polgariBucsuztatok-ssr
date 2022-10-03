import { Component } from '@angular/core';
import { farewellPersonData } from 'src/db-data';

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.scss'],
})
export class IntroductionPageComponent {
  farewellPersons = farewellPersonData;
}
