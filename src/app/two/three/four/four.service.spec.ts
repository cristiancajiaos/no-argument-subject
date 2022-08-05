import { TestBed } from '@angular/core/testing';

import { FourService } from './four.service';

describe('FourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FourService = TestBed.get(FourService);
    expect(service).toBeTruthy();
  });
});
