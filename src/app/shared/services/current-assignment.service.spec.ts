import {
  beforeEachProviders,
  describe,
  inject,
  it,
  beforeEach
} from '@angular/core/testing';
import { provideStore } from '@ngrx/store';

import { CurrentAssignmentService } from './current-assignment.service';
import { CURRENT_ASSIGNMENT_REDUCER } from '../reducers/current-assignment.reducer';
import { Assignment } from '../models/assignment.model';

describe('CurrentAssignmentService', () => {
  beforeEachProviders(() => [
    CurrentAssignmentService,
    provideStore(CURRENT_ASSIGNMENT_REDUCER)
  ]);

  let service: CurrentAssignmentService;

  beforeEach(inject([CurrentAssignmentService], (serv) => {
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
