import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLookingForOfferComponent } from './create-looking-for-offer.component';

describe('CreateLookingForOfferComponent', () => {
  let component: CreateLookingForOfferComponent;
  let fixture: ComponentFixture<CreateLookingForOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLookingForOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLookingForOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
