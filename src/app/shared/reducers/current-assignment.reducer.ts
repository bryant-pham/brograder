import { ActionReducer } from '@ngrx/store';

import { Assignment } from '../models';

export const SET_CURRENT_ASSIGNMENT = 'SET_CURRENT_ASSIGNMENT';

// Key should match name of reducer
export const CURRENT_ASSIGNMENT_REDUCER_KEY = 'CURRENT_ASSIGNMENT';
export const CURRENT_ASSIGNMENT: ActionReducer<Assignment> = (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_ASSIGNMENT:
      return payload;
    default:
      return state;
  }
};
