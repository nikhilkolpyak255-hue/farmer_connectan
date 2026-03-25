import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customeraccount } from './customeraccount';

describe('Customeraccount', () => {
  let component: Customeraccount;
  let fixture: ComponentFixture<Customeraccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customeraccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customeraccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
