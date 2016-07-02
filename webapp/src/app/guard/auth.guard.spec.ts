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
import { Subject } from 'rxjs/Subject';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from '../shared/services/authentication.service';

class MockRouter {
  navigate(): void {
    // no op
  }
}

class MockAuthService {
  authenticationStream(): void {
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
  let authObs = Subject.create();

  beforeEach(inject([AuthenticationService], (_authService) => {
    authService = _authService;
    spyOn(authService, 'authenticationStream').and.returnValue(authObs);

  }));

  beforeEach(inject([AuthGuard, AuthenticationService], (_guard) => {
    guard = _guard;
  }));

  it('should return true if authenticated', () => {
    authObs.next(true);

    let result = guard.canActivate();

    expect(result).toBeTruthy();
  });

  it('should return false if not authenticated', () => {
    authObs.next(false);

    let result = guard.canActivate();

    expect(result).toBeFalsy();
  });
});
