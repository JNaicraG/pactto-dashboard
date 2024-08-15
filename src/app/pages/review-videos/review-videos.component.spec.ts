import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewVideosComponent } from './review-videos.component';

describe('ReviewVideosComponent', () => {
  let component: ReviewVideosComponent;
  let fixture: ComponentFixture<ReviewVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
