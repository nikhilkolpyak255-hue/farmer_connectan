import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rentjunction } from './rentjunction';

describe('Rentjunction', () => {
  let component: Rentjunction;
  let fixture: ComponentFixture<Rentjunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rentjunction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rentjunction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
