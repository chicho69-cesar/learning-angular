import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { notAuthenticatedGuardGuard } from './not-authenticated.guard';

describe('notAuthenticatedGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => notAuthenticatedGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
