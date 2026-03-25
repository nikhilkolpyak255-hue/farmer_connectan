import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcustomers } from './newcustomers';

describe('Newcustomers', () => {
  let component: Newcustomers;
  let fixture: ComponentFixture<Newcustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Newcustomers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcustomers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
