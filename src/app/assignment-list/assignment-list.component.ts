import { Component } from '@angular/core';

import { Assignment } from '../shared/models/assignment.model';
import { AssignmentService } from '../shared/services/assignment.service';

@Component({
  selector: 'bro-assignment-list',
  template: require('./assignment-list.html'),
  styles: [ require('./assignment-list.css') ],
  providers: [ AssignmentService ]
})
export class AssignmentListComponent {
  assignments: Array<Assignment> = [];

  constructor(private currentAssignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.assignments = Assignment.TestBuilder
      .buildAssignments('Social Studies DA', 'Math Assignment 1', 'Math Assignment 2');
  }

  setCurrentAssignment(assignment: Assignment): void {
    this.currentAssignmentService.setCurrentAssignment(assignment);
  }
}
