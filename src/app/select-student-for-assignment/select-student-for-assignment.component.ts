import { Component, OnInit } from '@angular/core';

import { GradeStudentListComponent } from '../grade-student-list/grade-student-list.component';
import { AssignmentService } from '../shared/services';
import { Assignment } from '../shared/models';

@Component({
  selector: 'bro-pick-student-for-assignment',
  template: require('./select-student-for-assignment.html'),
  providers: [ AssignmentService ],
  directives: [ GradeStudentListComponent ]
})
export class SelectStudentForAssignmentComponent implements OnInit {
  nextRoute = 'Questions';
  assignment: Assignment;

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.assignmentService.getCurrentAssignment()
      .subscribe(assignment => this.assignment = assignment);
  }
}
