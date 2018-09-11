import { TestBed, inject } from '@angular/core/testing';

import { ReachedadminService } from './reachedadmin.service';

describe('ReachedadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReachedadminService]
    });
  });

  it('should be created', inject([ReachedadminService], (service: ReachedadminService) => {
    expect(service).toBeTruthy();
  }));
});
