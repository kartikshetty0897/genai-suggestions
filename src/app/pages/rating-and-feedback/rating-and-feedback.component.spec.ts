import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAndFeedbackComponent } from './rating-and-feedback.component';

describe('RatingAndFeedbackComponent', () => {
  let component: RatingAndFeedbackComponent;
  let fixture: ComponentFixture<RatingAndFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingAndFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingAndFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
