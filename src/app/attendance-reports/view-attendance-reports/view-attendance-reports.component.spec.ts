import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceReportsComponent } from './view-attendance-reports.component';

describe('ViewAttendanceReportsComponent', () => {
  let component: ViewAttendanceReportsComponent;
  let fixture: ComponentFixture<ViewAttendanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttendanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttendanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
