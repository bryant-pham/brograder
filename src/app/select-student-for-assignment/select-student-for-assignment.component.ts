import { Component } from '@angular/core';

import { ClassComponent } from '../class/class.component';

@Component({
  selector: 'bro-pick-student-for-assignment',
  template: require('./select-student-for-assignment.html'),
  directives: [ ClassComponent ]
})
export class SelectForAssignmentComponent {
  nextRoute = 'Questions';
}
