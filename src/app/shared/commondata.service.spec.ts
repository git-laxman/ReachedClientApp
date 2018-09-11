import { TestBed, inject } from '@angular/core/testing';

import { CommondataService } from './commondata.service';

describe('CommondataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommondataService]
    });
  });

  it('should be created', inject([CommondataService], (service: CommondataService) => {
    expect(service).toBeTruthy();
  }));
});
