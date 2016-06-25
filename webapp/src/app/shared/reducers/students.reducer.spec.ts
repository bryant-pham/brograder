import { describe, it, expect } from '@angular/core/testing';
import Immutable = require('immutable');

import { Student } from '../models';
import { studentsReducer, SET_STUDENTS } from './students.reducer.ts';

describe('studentsReducer', () => {
  it('should set students', () => {
    let payload = [new Student('John', 'Cena', '1')];

    let state = studentsReducer(
      Immutable.Map<string, Student>(),
      {type: SET_STUDENTS, payload: payload});

    expect(state.toArray()).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let payload = [new Student('John', 'Cena', '1')];

    let state = studentsReducer(
      Immutable.Map<string, Student>(),
      {type: 'INVALID OPERATION', payload: payload});

    expect(state.toArray()).toEqual([]);
  });
});
