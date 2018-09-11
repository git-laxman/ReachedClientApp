import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationowneradminloginComponent } from './applicationowneradminlogin.component';

describe('ApplicationowneradminloginComponent', () => {
  let component: ApplicationowneradminloginComponent;
  let fixture: ComponentFixture<ApplicationowneradminloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationowneradminloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationowneradminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
