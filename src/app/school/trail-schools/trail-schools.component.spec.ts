import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailSchoolsComponent } from './trail-schools.component';

describe('TrailSchoolsComponent', () => {
  let component: TrailSchoolsComponent;
  let fixture: ComponentFixture<TrailSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
