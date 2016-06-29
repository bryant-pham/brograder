import { describe, it, expect } from '@angular/core/testing';

import { Student } from '../models';
import { currentStudentReducer, SET_CURRENT_STUDENT } from './current-student.reducer';

describe('current-student reducer', () => {
  it('set current student', () => {
    let payload = new Student.Builder().build();

    let state = currentStudentReducer(undefined, {type: SET_CURRENT_STUDENT, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = new Student.Builder().withFirstName('jack').build();
    let payload = new Student.Builder().withFirstName('mike').build();

    let state = currentStudentReducer(initialState, {type: 'INVALID OPERATION', payload: payload});

    expect(state).toEqual(initialState);
  });
});
