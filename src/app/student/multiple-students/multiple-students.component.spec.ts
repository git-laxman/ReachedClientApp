import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleStudentsComponent } from './multiple-students.component';

describe('MultipleStudentsComponent', () => {
  let component: MultipleStudentsComponent;
  let fixture: ComponentFixture<MultipleStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
