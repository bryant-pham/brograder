import { describe, it, expect } from '@angular/core/testing';

import { classesReducer, SET_ALL_CLASSES } from './classes.reducer.ts';
import { Class, Student } from '../models';

describe('all-classes reducer', () => {
  it('set all classes', () => {
    let payload = [Class.Builder.build('AM', new Student('John Cena'))];

    let state = classesReducer(undefined, {type: SET_ALL_CLASSES, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = [Class.Builder.build('AM', new Student('John Cena'))];
    let payload = [Class.Builder.build('AM', new Student('Jack Frost'))];

    let state = classesReducer(initialState, {type: 'INVALID REDUCER OPERATION', payload: payload});

    expect(state).toEqual(initialState);
  });
});
