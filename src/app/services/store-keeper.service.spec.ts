import { TestBed } from '@angular/core/testing';

import { StoreKeeperService } from './store-keeper.service';

describe('StoreKeeperService', () => {
  let service: StoreKeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreKeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
