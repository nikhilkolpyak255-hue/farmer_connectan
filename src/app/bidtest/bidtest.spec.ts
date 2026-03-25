import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bidtest } from './bidtest';

describe('Bidtest', () => {
  let component: Bidtest;
  let fixture: ComponentFixture<Bidtest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bidtest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bidtest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
