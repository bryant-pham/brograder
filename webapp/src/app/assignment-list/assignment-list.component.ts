import { Component } from '@angular/core';

import { Assignment } from '../shared/models/assignment.model';
import { AssignmentService } from '../shared/services/assignment.service';
import { AssignmentSearchPipe } from '../shared/pipes/assignment-search.pipe';
import { AddAssignmentComponent } from '../add-assignment/add-assignment.component';

@Component({
  selector: 'bro-assignment-list',
  template: require('./assignment-list.html'),
  styles: [ require('./assignment-list.css') ],
  pipes: [ AssignmentSearchPipe ],
  directives: [ AddAssignmentComponent ]
})
export class AssignmentListComponent {
  assignments: Array<Assignment> = [];
  searchTerm: string;
  showAddAssignmentModal = false;

  constructor(private assignmentService: AssignmentService) {
    this.assignmentService.getAllAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }

  setCurrentAssignment(assignment: Assignment): void {
    this.assignmentService.setCurrentAssignment(assignment);
  }

  closeModal(): void {
    this.showAddAssignmentModal = false;
  }

  showModal(): void {
    this.showAddAssignmentModal = true;
  }
}
