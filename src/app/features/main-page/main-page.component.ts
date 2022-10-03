import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1000)]),
    ]),
  ],
})
export class MainPageComponent {}
