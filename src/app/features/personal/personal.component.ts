import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from 'ngx-audio-player';
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

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  msaapPlaylist: Track[];

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    farewellPersonData.forEach((obj) => {
      if (this.name === obj.name) {
        this.currentPersonData = obj;
      }
    });

    this.msaapPlaylist = this.currentPersonData.playlist;
    console.log(this.currentPersonData.playlist);
    console.log(this.msaapPlaylist);
  }
}
