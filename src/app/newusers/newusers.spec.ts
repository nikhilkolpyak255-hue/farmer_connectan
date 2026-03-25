import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newusers } from './newusers';

describe('Newusers', () => {
  let component: Newusers;
  let fixture: ComponentFixture<Newusers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Newusers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newusers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
