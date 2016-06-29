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

class MockRouter {
  navigate(): void {
    // no op
  }
}

describe('AuthGuard', () => {
  beforeEachProviders(() => [
    AuthGuard,
    provide(Router, {useClass: MockRouter})
  ]);

  let guard: AuthGuard;

  beforeEach(inject([AuthGuard], _guard => {
    guard = _guard;
  }));

  it('should return true if authenticated', () => {
    let result = guard.canActivate();

    expect(result).toBeTruthy();
  });
});
