import { ActionReducer } from '@ngrx/store';
import Immutable = require('immutable');

import { Student } from '../models';
import { STUDENT_MOCKS } from './mocks/students.mock';

export const STUDENTS = 'STUDENTS';

export const SET_STUDENTS = 'SET_STUDENTS';

export const studentsReducer: ActionReducer<Immutable.Map<string, Student>> = (state = STUDENT_MOCKS, {type, payload}) => {
  switch (type) {
    case SET_STUDENTS:
      payload.forEach((student: Student) => {
        state = state.set(student.id, student);
      });
      return state;
    default:
      return state;
  }
};
