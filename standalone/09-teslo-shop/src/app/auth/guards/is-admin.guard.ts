import { CanMatchFn } from '@angular/router';

export const isAdminGuardGuard: CanMatchFn = (route, segments) => {
  return true;
};
