import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionTileComponent } from './introduction-tile.component';

describe('IntroductionTileComponent', () => {
  let component: IntroductionTileComponent;
  let fixture: ComponentFixture<IntroductionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
