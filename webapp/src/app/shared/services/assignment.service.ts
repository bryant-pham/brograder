import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Assignment } from '../models/assignment.model';
import { AppStore } from '../reducers/app.store';
import { Question } from '../models/question.model';
import {
  SET_CURRENT_ASSIGNMENT,
  CURRENT_ASSIGNMENT,
  ASSIGNMENTS,
  ADD_ASSIGNMENT
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
    return this.store.select(CURRENT_ASSIGNMENT)
      .map((currentAssignment: Assignment) => currentAssignment.clone());
  }

  getAllAssignments(): Observable<Array<Assignment>> {
    return <Observable<Array<Assignment>>> this.store.select(ASSIGNMENTS);
  }

  saveAssignment(name: string, questions: Array<Question>, dueDate: Date): void {
    let assignment = new Assignment(name, questions, dueDate);
    this.store.dispatch({
      type: ADD_ASSIGNMENT,
      payload: assignment
    });
  }
}
