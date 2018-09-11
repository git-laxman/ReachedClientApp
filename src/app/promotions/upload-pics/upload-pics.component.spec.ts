import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPicsComponent } from './upload-pics.component';

describe('UploadPicsComponent', () => {
  let component: UploadPicsComponent;
  let fixture: ComponentFixture<UploadPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
