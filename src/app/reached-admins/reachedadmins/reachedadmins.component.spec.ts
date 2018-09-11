import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachedadminsComponent } from './reachedadmins.component';

describe('ReachedadminsComponent', () => {
  let component: ReachedadminsComponent;
  let fixture: ComponentFixture<ReachedadminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachedadminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachedadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
