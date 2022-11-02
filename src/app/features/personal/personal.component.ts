import { OnInit, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    farewellPersonData.forEach((obj) => {
      if (this.name === obj.name) {
        this.currentPersonData = obj;
      }
    });

    this.title.setTitle(`${this.name} - polgári búcsúztató`);
    this.meta.updateTag({
      name: 'description',
      content: `${this.currentPersonData.quote}`,
    });
  }
}
