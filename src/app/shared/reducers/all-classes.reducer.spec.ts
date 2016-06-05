import { describe, it, expect } from '@angular/core/testing';

import { allClassesReducer, SET_ALL_CLASSES } from './all-classes.reducer';
import { Class, Student } from '../models';

describe('all-classes reducer', () => {
  it('set all classes', () => {
    let payload = [Class.Builder.build(new Student('John Cena'))];

    let state = allClassesReducer(undefined, {type: SET_ALL_CLASSES, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = [Class.Builder.build(new Student('John Cena'))];
    let payload = [Class.Builder.build(new Student('Jack Frost'))];

    let state = allClassesReducer(initialState, {type: 'INVALID REDUCER OPERATION', payload: payload});

    expect(state).toEqual(initialState);
  });
});
