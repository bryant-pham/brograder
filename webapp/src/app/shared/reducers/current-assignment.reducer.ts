import { ActionReducer } from '@ngrx/store';

import { Assignment } from '../models';

/*
* Name of reducer: used to select reducer from store
* */
export const CURRENT_ASSIGNMENT = 'CURRENT_ASSIGNMENT';

/*
* Name of reducer action: used to denote the type of operation on reducer
* */
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
