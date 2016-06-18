import { describe, it, expect } from '@angular/core/testing';

import { Student } from '../models';
import { studentsReducer, SET_STUDENTS } from './student.reducer';

describe('studentsReducer', () => {
  it('should set students', () => {
    let payload = [
      new Student('John', 'Cena', '1')
    ];

    let state = studentsReducer([], {type: SET_STUDENTS, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let payload = [
      new Student('John', 'Cena', '1')
    ];

    let state = studentsReducer([], {type: 'INVALID OPERATION', payload: payload});

    expect(state).toEqual([]);
  });
});
