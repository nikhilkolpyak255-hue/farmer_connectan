import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { farmerguardGuard } from './farmerguard-guard';

describe('farmerguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => farmerguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
