import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Assignment } from '../models/assignment.model';
import { AppStore } from '../reducers/app.store';
import {
  SET_CURRENT_ASSIGNMENT,
  CURRENT_ASSIGNMENT,
  ASSIGNMENTS
} from '../reducers';

@Injectable()
export class AssignmentService {
  constructor(private store: Store<AppStore>) {
  }

  setCurrentAssignment(assignment: Assignment) {
    this.store.dispatch({
      type: SET_CURRENT_ASSIGNMENT,
      payload: assignment
    });
  }

  getCurrentAssignment(): Observable<Assignment> {
    return this.store.select(CURRENT_ASSIGNMENT);
  }

  getAllAssignments(): Observable<Array<Assignment>> {
    return this.store.select(ASSIGNMENTS);
  }
}
