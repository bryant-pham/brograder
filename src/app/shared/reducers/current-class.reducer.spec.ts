import { describe, it, expect } from '@angular/core/testing';

import { Class, Student } from '../models';
import { SET_CURRENT_CLASS, currentClassReducer } from './current-class.reducer';

describe('current-class reducer', () => {
  it('set current class', () => {
    let payload = new Class([]);

    let state = currentClassReducer(undefined, {type: SET_CURRENT_CLASS, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = new Class([]);
    let payload = new Class([new Student('john', 'cena')]);

    let state = currentClassReducer(initialState, {type: 'INVALID REDUCER OPERATION', payload: payload});

    expect(state).toEqual(initialState);
  });
});