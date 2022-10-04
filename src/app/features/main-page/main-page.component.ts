import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('fadePic', [
      transition('void => *', [style({ opacity: 0 }), animate(500)]),
    ]),
    trigger('fadeText', [
      transition('void => *', [style({ opacity: 0 }), animate(1200)]),
    ]),
  ],
})
export class MainPageComponent {}
