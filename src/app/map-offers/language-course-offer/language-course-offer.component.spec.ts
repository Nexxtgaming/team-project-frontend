import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCourseOfferComponent } from './language-course-offer.component';

describe('LanguageCourseOfferComponent', () => {
  let component: LanguageCourseOfferComponent;
  let fixture: ComponentFixture<LanguageCourseOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageCourseOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageCourseOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
