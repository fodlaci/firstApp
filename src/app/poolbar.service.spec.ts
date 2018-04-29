import { TestBed, inject } from '@angular/core/testing';

import { PoolbarService } from './poolbar.service';

describe('PoolbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoolbarService]
    });
  });

  it('should be created', inject([PoolbarService], (service: PoolbarService) => {
    expect(service).toBeTruthy();
  }));
});
