import { ActionReducer } from '@ngrx/store';

import { Teacher } from '../models';

export const TEACHER = 'TEACHER';

export const SET_TEACHER = 'SET_TEACHER';

let initialState = new Teacher.Builder()
  .withId('1')
  .withClasses(['AM', 'PM'])
  .build();

export const teacherReducer: ActionReducer<Teacher> = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TEACHER:
      return payload;
    default:
      return state;
  }
};
