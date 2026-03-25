import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biddingend } from './biddingend';

describe('Biddingend', () => {
  let component: Biddingend;
  let fixture: ComponentFixture<Biddingend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Biddingend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biddingend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
