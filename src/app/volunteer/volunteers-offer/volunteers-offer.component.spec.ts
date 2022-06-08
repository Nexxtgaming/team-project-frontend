import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersOfferComponent } from './volunteers-offer.component';

describe('VolunteersOfferComponent', () => {
  let component: VolunteersOfferComponent;
  let fixture: ComponentFixture<VolunteersOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
