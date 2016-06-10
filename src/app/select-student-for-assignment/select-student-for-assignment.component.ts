import { Component, OnInit } from '@angular/core';

import { ClassComponent } from '../class/class.component';
import { AssignmentService } from '../shared/services';
import { Assignment } from '../shared/models';

@Component({
  selector: 'bro-pick-student-for-assignment',
  template: require('./select-student-for-assignment.html'),
  providers: [ AssignmentService ],
  directives: [ ClassComponent ]
})
export class SelectForAssignmentComponent implements OnInit {
  nextRoute = 'Questions';
  assignment: Assignment;

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.assignmentService.getCurrentAssignment()
      .subscribe(assignment => this.assignment = assignment);
  }
}
