import { Component } from '@angular/core';

import { Assignment } from '../shared/models/assignment.model';
import { AssignmentService } from '../shared/services/assignment.service';
import { AssignmentSearch } from './assignment-search.component';
import { AssignmentSearchPipe } from "../shared/pipes/assignment-search.pipe";

@Component({
  selector: 'bro-assignment-list',
  template: require('./assignment-list.html'),
  styles: [ require('./assignment-list.css') ],
  providers: [ AssignmentService ],
  directives: [ AssignmentSearch ],
  pipes: [ AssignmentSearchPipe ]
})
export class AssignmentListComponent {
  assignments: Array<Assignment> = [];
  searchInput: string;

  constructor(private assignmentService: AssignmentService) {
    this.assignmentService.getAllAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }

  setCurrentAssignment(assignment: Assignment): void {
    this.assignmentService.setCurrentAssignment(assignment);
  }

  handleSearchInput(event): void {
    this.searchInput = event.value;
  }
}
