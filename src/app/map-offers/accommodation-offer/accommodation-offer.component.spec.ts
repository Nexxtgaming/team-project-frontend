import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationOfferComponent } from './accommodation-offer.component';

describe('AccommodationOfferComponent', () => {
  let component: AccommodationOfferComponent;
  let fixture: ComponentFixture<AccommodationOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
