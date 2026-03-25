import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cutomerpendingbid } from './cutomerpendingbid';

describe('Cutomerpendingbid', () => {
  let component: Cutomerpendingbid;
  let fixture: ComponentFixture<Cutomerpendingbid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cutomerpendingbid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cutomerpendingbid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
