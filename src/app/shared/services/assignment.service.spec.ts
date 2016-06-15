import {
  beforeEachProviders,
  describe,
  inject,
  it,
  beforeEach
} from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { Store } from '@ngrx/store';

import { AssignmentService } from './assignment.service';
import { AppStore } from '../reducers/app.store';
import { Assignment } from '../models/assignment.model';
import {
  REDUCERS,
  CURRENT_ASSIGNMENT,
  ASSIGNMENTS,
  SET_CURRENT_ASSIGNMENT,
  SET_ASSIGNMENTS
} from '../reducers/index';

describe('AssignmentService', () => {
  beforeEachProviders(() => [
    AssignmentService,
    provideStore(REDUCERS)
  ]);

  let service: AssignmentService;
  let store: Store<AppStore>;

  beforeEach(inject([AssignmentService, Store], (serv, sto) => {
    service = serv;
    store = sto;
  }));

  it('should set current assignment', () => {
    let expectedAssignment = Assignment.Builder.buildAssignment('test');

    service.setCurrentAssignment(expectedAssignment);

    store.select(CURRENT_ASSIGNMENT)
      .subscribe(currentAssignment => {
        expect(currentAssignment).toBe(expectedAssignment);
      });
  });

  it('should get current assignment', () => {
    let expectedAssignment = Assignment.Builder.buildAssignment('test');
    store.dispatch({type: SET_CURRENT_ASSIGNMENT, payload: expectedAssignment});

    service.getCurrentAssignment()
      .subscribe(currentAssignment => {
        expect(currentAssignment).toBe(expectedAssignment);
      });
  });

  it('should get all assignments', () => {
    let expectedAssignments = [Assignment.Builder.buildAssignment('test')];
    store.dispatch({type: SET_ASSIGNMENTS, payload: expectedAssignments});

    service.getAllAssignments()
      .subscribe(assignments => {
        expect(assignments).toBe(expectedAssignments);
      });
  });

  it('should save assignment with assignment attributes', () => {
    service.saveAssignment('test', [], new Date('2015-01-01'));

    store.select(ASSIGNMENTS)
      .subscribe(assignments => {
        let expectedAssignment = new Assignment('test', [], new Date('2015-01-01'));
        let assignment = Helpers.findAssignmentIn(assignments, expectedAssignment);
        expect(assignment).toEqual(expectedAssignment);
      });
  });
});

class Helpers {
  static findAssignmentIn(assignments: Array<Assignment>, assignmentToFind: Assignment): Assignment {
    return assignments.find((assignment) => assignment.name === assignmentToFind.name);
  }
}
