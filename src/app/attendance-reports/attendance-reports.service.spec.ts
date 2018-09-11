import { TestBed, inject } from '@angular/core/testing';

import { AttendanceReportsService } from './attendance-reports.service';

describe('AttendanceReportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendanceReportsService]
    });
  });

  it('should be created', inject([AttendanceReportsService], (service: AttendanceReportsService) => {
    expect(service).toBeTruthy();
  }));
});
