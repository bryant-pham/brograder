import { ActionReducer } from '@ngrx/store';

import { Assignment } from '../models';

export const CURRENT_ASSIGNMENT = 'CURRENT_ASSIGNMENT';

export const SET_CURRENT_ASSIGNMENT = 'SET_CURRENT_ASSIGNMENT';

export const currentAssignmentReducer: ActionReducer<Assignment> = (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_ASSIGNMENT:
      return payload;
    default:
      return state;
  }
};

export const CURRENT_ASSIGNMENT_REDUCER = {
  [CURRENT_ASSIGNMENT]: currentAssignmentReducer
};
