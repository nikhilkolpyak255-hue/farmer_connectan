import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farmerbidrequest } from './farmerbidrequest';

describe('Farmerbidrequest', () => {
  let component: Farmerbidrequest;
  let fixture: ComponentFixture<Farmerbidrequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Farmerbidrequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Farmerbidrequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
