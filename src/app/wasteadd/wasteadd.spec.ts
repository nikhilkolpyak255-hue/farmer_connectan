import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wasteadd } from './wasteadd';

describe('Wasteadd', () => {
  let component: Wasteadd;
  let fixture: ComponentFixture<Wasteadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wasteadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wasteadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
