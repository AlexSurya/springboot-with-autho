import { TestBed } from '@angular/core/testing';

import { RootserviceService } from './rootservice.service';

describe('RootserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootserviceService = TestBed.get(RootserviceService);
    expect(service).toBeTruthy();
  });
});
