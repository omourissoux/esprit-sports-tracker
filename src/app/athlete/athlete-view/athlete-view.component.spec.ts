import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteViewComponent } from './athlete-view.component';

describe('AthleteViewComponent', () => {
  let component: AthleteViewComponent;
  let fixture: ComponentFixture<AthleteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
