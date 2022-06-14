import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingForOfferComponent } from './looking-for-offer.component';

describe('LookingForRequestComponent', () => {
  let component: LookingForOfferComponent;
  let fixture: ComponentFixture<LookingForOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookingForOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookingForOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
