import { ActionReducer } from '@ngrx/store';

import { Assignment } from "../models";

export const ASSIGNMENTS = 'ASSIGNMENTS';

export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';

let initialState =
  Assignment.TestBuilder.buildAssignments('Social Studies DA', 'Math Assignment 1', 'Math Assignment 2');

export const assignmentsReducer: ActionReducer<Array<Assignment>> = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_ASSIGNMENT:
      return [ ...state, payload ];
    default:
      return state;
  }
};
