import { describe, it, expect } from '@angular/core/testing';

import { SET_CURRENT_CLASS, currentClassReducer } from './current-class.reducer';

describe('current-class reducer', () => {
  it('set current class', () => {
    let payload = 'AM';

    let state = currentClassReducer(undefined, {type: SET_CURRENT_CLASS, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = 'AM';
    let payload = 'PM';

    let state = currentClassReducer(
      initialState, {type: 'INVALID REDUCER OPERATION', payload: payload});

    expect(state).toEqual(initialState);
  });
});
