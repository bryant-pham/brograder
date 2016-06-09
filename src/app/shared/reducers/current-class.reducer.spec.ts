import { describe, it, expect } from '@angular/core/testing';

import { Class } from '../models';
import { SET_CURRENT_CLASS, currentClassReducer } from './current-class.reducer';

describe('current-class reducer', () => {
  it('set current class', () => {
    let payload = Class.Builder.build('test');

    let state = currentClassReducer(undefined, {type: SET_CURRENT_CLASS, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = Class.Builder.build('initial');
    let payload = Class.Builder.build('test');

    let state = currentClassReducer(
      initialState, {type: 'INVALID REDUCER OPERATION', payload: payload});

    expect(state).toEqual(initialState);
  });
});
