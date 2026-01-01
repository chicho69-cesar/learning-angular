import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { isAdminGuardGuard } from './is-admin.guard';

describe('isAdminGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => isAdminGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
