import { describe, it, expect } from '@angular/core/testing';

import { assignmentsReducer, ADD_ASSIGNMENT } from './assignments.reducer';
import { Assignment } from '../models';

describe('assignments reducer', () => {
  it('add assignment', () => {
    let payload = new Assignment('Social Studies DA', 4, new Date());

    let state = assignmentsReducer([], {type: ADD_ASSIGNMENT, payload: payload});

    expect(state).toEqual([payload]);
  });

  it('perform no operation if invalid reducer operation', () => {
    let initialState = [
      new Assignment('Social Studies DA', 4, new Date()),
    ];

    let state = assignmentsReducer(initialState, {type: 'INVALID REDUCER OPERATION'});

    expect(state).toEqual(initialState);
  });
});
