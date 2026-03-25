import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidValue } from './bid-value';

describe('BidValue', () => {
  let component: BidValue;
  let fixture: ComponentFixture<BidValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BidValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
