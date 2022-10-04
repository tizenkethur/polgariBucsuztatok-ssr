import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { farewellPerson } from 'src/app/shared/models/farewellPersons';
import { farewellPersonData } from 'src/db-data';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
  name: string;
  farewellPersonData: farewellPerson[] = farewellPersonData;
  currentPersonData: farewellPerson;

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    farewellPersonData.forEach((obj) => {
      if (this.name === obj.name) {
        this.currentPersonData = obj;
      }
    });
  }
}
