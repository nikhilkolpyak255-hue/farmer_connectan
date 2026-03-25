import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otpverify } from './otpverify';

describe('Otpverify', () => {
  let component: Otpverify;
  let fixture: ComponentFixture<Otpverify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Otpverify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Otpverify);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
