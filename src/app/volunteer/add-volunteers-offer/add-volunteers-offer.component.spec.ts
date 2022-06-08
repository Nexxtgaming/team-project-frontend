import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolunteersOfferComponent } from './add-volunteers-offer.component';

describe('AddVolunteersOfferComponent', () => {
  let component: AddVolunteersOfferComponent;
  let fixture: ComponentFixture<AddVolunteersOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVolunteersOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVolunteersOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
