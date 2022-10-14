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
  audioList: { [key: string]: string }[];
  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    farewellPersonData.forEach((obj) => {
      if (this.name === obj.name) {
        this.currentPersonData = obj;
      }
    });
    this.audioList = this.currentPersonData.audioList;
  }
}
