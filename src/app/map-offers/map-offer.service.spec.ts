import { TestBed } from '@angular/core/testing';

import { MapOfferService } from './map-offer.service';

describe('MapOfferService', () => {
  let service: MapOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
