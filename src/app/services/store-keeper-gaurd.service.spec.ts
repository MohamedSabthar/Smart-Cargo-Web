import { TestBed } from '@angular/core/testing';

import { StoreKeeperGaurdService } from './store-keeper-gaurd.service';

describe('StoreKeeperGaurdService', () => {
  let service: StoreKeeperGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreKeeperGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
