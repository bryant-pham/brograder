import { describe, it, expect } from '@angular/core/testing';

import { assignmentsReducer, ADD_ASSIGNMENT, SET_ASSIGNMENTS } from './assignments.reducer';
import { Assignment } from '../models';

describe('assignments reducer', () => {
  it('add assignment', () => {
    let payload = new Assignment('Social Studies DA', [], new Date());

    let state = assignmentsReducer([], {type: ADD_ASSIGNMENT, payload: payload});

    expect(state).toEqual([payload]);
  });

  it('set assignments', () => {
    let payload = [new Assignment('Social Studies DA', [], new Date())];

    let state = assignmentsReducer([], {type: SET_ASSIGNMENTS, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = Assignment.TestBuilder.buildAssignments('Social Studies DA');

    let state = assignmentsReducer(initialState, {type: 'INVALID REDUCER OPERATION'});

    expect(state).toEqual(initialState);
  });
});
