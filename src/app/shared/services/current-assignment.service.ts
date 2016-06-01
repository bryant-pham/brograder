import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Assignment } from '../models/assignment.model.ts';
import { SET_CURRENT_ASSIGNMENT, CURRENT_ASSIGNMENT_REDUCER_KEY } from '../reducers';

@Injectable()
export class CurrentAssignmentService {
  constructor(private store: Store) {
  }

  setCurrentAssignment(assignment: Assignment) {
    this.store.dispatch({
      type: SET_CURRENT_ASSIGNMENT,
      payload: assignment
    });
  }

  getCurrentAssignment(): Observable<Assignment> {
    return this.store.select(CURRENT_ASSIGNMENT_REDUCER_KEY);
  }
}
