import { ActionReducer } from '@ngrx/store';

import { Student } from '../models';

export const CURRENT_STUDENT = 'CURRENT_STUDENT';

export const SET_CURRENT_STUDENT = 'SET_CURRENT_STUDENT';

export const currentStudentReducer: ActionReducer<Student> = (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_STUDENT:
      return payload;
    default:
      return state;
  }
};
