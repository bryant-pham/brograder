import { Component } from '@angular/core';

import { Assignment } from '../shared/models/assignment.model';

@Component({
  selector: 'bro-assignment-list',
  template: require('./assignment-list.html'),
  styles: [ require('./assignment-list.css') ]
})
export class AssignmentListComponent {
  assignments: Array<Assignment> = [];

  ngOnInit() {
    this.assignments = Assignment.TestBuilder
      .buildAssignments('Social Studies DA', 'Math Assignment 1', 'Math Assignment 2');
  }
}
