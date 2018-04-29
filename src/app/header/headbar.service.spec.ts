import { TestBed, inject } from '@angular/core/testing';

import { HeadbarService } from './headbar.service';

describe('HeadbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadbarService]
    });
  });

  it('should be created', inject([HeadbarService], (service: HeadbarService) => {
    expect(service).toBeTruthy();
  }));
});
