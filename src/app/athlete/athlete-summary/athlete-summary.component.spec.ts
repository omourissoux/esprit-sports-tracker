import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteSummaryComponent } from './athlete-summary.component';

describe('AthleteSummaryComponent', () => {
  let component: AthleteSummaryComponent;
  let fixture: ComponentFixture<AthleteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthleteSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
