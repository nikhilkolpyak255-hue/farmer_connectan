import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bids } from './bids';

describe('Bids', () => {
  let component: Bids;
  let fixture: ComponentFixture<Bids>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bids]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bids);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
