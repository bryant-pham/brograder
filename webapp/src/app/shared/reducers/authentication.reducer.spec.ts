import { it, expect, describe } from '@angular/core/testing';

import { authenticationReducer, AUTHENTICATED, UNAUTHENTICATED } from './authentication.reducer';

describe('authenticationReducer', () => {
  it('should return true to authenticate', () => {
    let action = { type: AUTHENTICATED };

    let state = authenticationReducer(undefined, action);

    expect(state).toBeTruthy();
  });

  it('should return false to unauthenticate', () => {
    let action = { type: UNAUTHENTICATED };

    let state = authenticationReducer(undefined, action);

    expect(state).toBeFalsy();
  });
});
