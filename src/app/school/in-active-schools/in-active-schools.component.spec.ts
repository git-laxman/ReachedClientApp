import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveSchoolsComponent } from './in-active-schools.component';

describe('InActiveSchoolsComponent', () => {
  let component: InActiveSchoolsComponent;
  let fixture: ComponentFixture<InActiveSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActiveSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActiveSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
