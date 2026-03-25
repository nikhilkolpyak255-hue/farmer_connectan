import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproduct } from './viewproduct';

describe('Viewproduct', () => {
  let component: Viewproduct;
  let fixture: ComponentFixture<Viewproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewproduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
