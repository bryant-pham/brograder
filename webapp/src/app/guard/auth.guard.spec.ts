import {
  describe,
  it,
  expect,
  beforeEachProviders,
  beforeEach,
  inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from '../shared/services/authentication.service';

class MockRouter {
  navigate(): void {
    // no op
  }
}

class MockAuthService {
  isAuthenticated(): void {
    // use spyOn to mock
  }
}

describe('AuthGuard', () => {
  beforeEachProviders(() => [
    AuthGuard,
    provide(AuthenticationService, {useClass: MockAuthService}),
    provide(Router, {useClass: MockRouter})
  ]);

  let guard: AuthGuard;
  let authService: AuthenticationService;

  beforeEach(inject([AuthGuard, AuthenticationService], (_guard, _authService) => {
    guard = _guard;
    authService = _authService;
  }));

  it('should return true if authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    let result = guard.canActivate();

    expect(result).toBeTruthy();
  });

  it('should return false if not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);

    let result = guard.canActivate();

    expect(result).toBeFalsy();
  });
});
