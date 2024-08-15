import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacttosComponent } from './pacttos.component';

describe('PacttosComponent', () => {
  let component: PacttosComponent;
  let fixture: ComponentFixture<PacttosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacttosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacttosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
