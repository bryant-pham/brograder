import { describe, it, expect } from '@angular/core/testing';

import {currentAssignmentReducer, SET_CURRENT_ASSIGNMENT} from "./current-assignment.reducer";
import { Assignment } from "../models/assignment.model";

describe('current-assignment reducer', () => {
  it('set current assignment', () => {
    let payload = Assignment.TestBuilder.buildAssignment('test');

    let state = currentAssignmentReducer(undefined, {type: SET_CURRENT_ASSIGNMENT, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = Assignment.TestBuilder.buildAssignment('initial');
    let payload = Assignment.TestBuilder.buildAssignment('test');

    let state = currentAssignmentReducer(initialState, {type: 'INVALID REDUCER OPERATION', payload: payload});

    expect(state).toEqual(initialState);
  });
});
