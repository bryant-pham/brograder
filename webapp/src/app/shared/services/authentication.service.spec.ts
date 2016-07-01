import { it, describe, expect, beforeEachProviders, beforeEach, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEachProviders(() => [
    AuthenticationService
  ]);

  let service: AuthenticationService;

  beforeEach(inject([AuthenticationService], _service => {
    service = _service;
  }));

  it('should return true if authenticated', () => {
    let result = service.isAuthenticated();

    expect(result).toBeTruthy();
  });
});
