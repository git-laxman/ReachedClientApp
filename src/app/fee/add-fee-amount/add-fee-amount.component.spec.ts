import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeeAmountComponent } from './add-fee-amount.component';

describe('AddFeeAmountComponent', () => {
  let component: AddFeeAmountComponent;
  let fixture: ComponentFixture<AddFeeAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeeAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeeAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
