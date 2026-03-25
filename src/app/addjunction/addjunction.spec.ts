import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addjunction } from './addjunction';

describe('Addjunction', () => {
  let component: Addjunction;
  let fixture: ComponentFixture<Addjunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addjunction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addjunction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
