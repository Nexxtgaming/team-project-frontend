import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationOfferComponent } from './translation-offer.component';

describe('TranslationOfferComponent', () => {
  let component: TranslationOfferComponent;
  let fixture: ComponentFixture<TranslationOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
