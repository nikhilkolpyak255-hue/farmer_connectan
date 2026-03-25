import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerabout } from './customerabout';

describe('Customerabout', () => {
  let component: Customerabout;
  let fixture: ComponentFixture<Customerabout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerabout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerabout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
