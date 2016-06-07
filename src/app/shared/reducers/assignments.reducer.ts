import { ActionReducer } from '@ngrx/store';

import { Assignment } from "../models";

export const ASSIGNMENTS = 'ASSIGNMENTS';

export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT';

let initialState = [
  new Assignment('Social Studies DA', 4, new Date()),
  new Assignment('Math Assignment 1', 4, new Date()),
  new Assignment('Math Assignment 2', 4, new Date())
];

export const assignmentsReducer: ActionReducer<Array<Assignment>> = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_ASSIGNMENT:
      return [ ...state, payload ];
    default:
      return state;
  }
};
