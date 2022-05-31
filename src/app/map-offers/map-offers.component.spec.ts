import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOffersComponent } from './map-offers.component';

describe('MapOffersComponent', () => {
  let component: MapOffersComponent;
  let fixture: ComponentFixture<MapOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
