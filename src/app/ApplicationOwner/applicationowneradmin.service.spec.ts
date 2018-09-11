import { TestBed, inject } from '@angular/core/testing';

import { ApplicationOwnerAdminService } from './applicationowneradmin.service';

describe('ApplicationowneradminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationOwnerAdminService]
    });
  });

  it('should be created', inject([ApplicationOwnerAdminService], (service: ApplicationOwnerAdminService) => {
    expect(service).toBeTruthy();
  }));
});
