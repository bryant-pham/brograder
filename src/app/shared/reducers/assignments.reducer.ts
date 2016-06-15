import { ActionReducer } from '@ngrx/store';

import { Assignment } from '../models';

export const ASSIGNMENTS = 'ASSIGNMENTS';

export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';
export const SET_ASSIGNMENTS = 'SET_ASSIGNMENTS';

let initialState =
  Assignment.Builder
    .buildAssignments('Social Studies DA', 'Math Assignment 1', 'Math Assignment 2');

export const assignmentsReducer: ActionReducer<Array<Assignment>> =
  (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_ASSIGNMENT:
      return [ ...state, payload ];
    case SET_ASSIGNMENTS:
      return payload;
    default:
      return state;
  }
};
