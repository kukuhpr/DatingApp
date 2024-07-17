import { TestBed } from '@angular/core/testing';

import { SwalfireService } from './swalfire.service';

describe('SwalfireService', () => {
  let service: SwalfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwalfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
