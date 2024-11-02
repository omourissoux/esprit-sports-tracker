import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteZonesComponent } from './athlete-zones.component';

describe('AthleteZonesComponent', () => {
  let component: AthleteZonesComponent;
  let fixture: ComponentFixture<AthleteZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteZonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
