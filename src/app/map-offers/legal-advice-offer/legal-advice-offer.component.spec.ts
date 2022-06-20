import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAdviceOfferComponent } from './legal-advice-offer.component';

describe('LegalAdviceOfferComponent', () => {
  let component: LegalAdviceOfferComponent;
  let fixture: ComponentFixture<LegalAdviceOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalAdviceOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalAdviceOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
