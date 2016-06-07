import {
  beforeEachProviders,
  describe,
  inject,
  it,
  beforeEach
} from '@angular/core/testing';
import { provideStore } from '@ngrx/store';

import { AssignmentService } from './assignment.service';
import { CURRENT_ASSIGNMENT_REDUCER } from '../reducers/current-assignment.reducer';
import { Assignment } from '../models/assignment.model';

describe('AssignmentService', () => {
  beforeEachProviders(() => [
    AssignmentService,
    provideStore(CURRENT_ASSIGNMENT_REDUCER)
  ]);

  let service: AssignmentService;

  beforeEach(inject([AssignmentService], (serv) => {
    service = serv;
  }));

  it('should set and get current assignment', () => {
    let expectedAssignment = Assignment.TestBuilder.buildAssignment('test');
    service.setCurrentAssignment(expectedAssignment);

    service.getCurrentAssignment()
      .subscribe((assignment) => {
        console.log(assignment);
        expect(assignment).toEqual(expectedAssignment);
    });
  });
});
