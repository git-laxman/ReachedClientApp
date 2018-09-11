import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToTeacherComponent } from './assign-to-teacher.component';

describe('AssignToTeacherComponent', () => {
  let component: AssignToTeacherComponent;
  let fixture: ComponentFixture<AssignToTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignToTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignToTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
