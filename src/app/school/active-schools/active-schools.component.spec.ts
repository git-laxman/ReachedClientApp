import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSchoolsComponent } from './active-schools.component';

describe('ActiveSchoolsComponent', () => {
  let component: ActiveSchoolsComponent;
  let fixture: ComponentFixture<ActiveSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
