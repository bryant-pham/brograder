import { Component } from '@angular/core';
import { GradeStudentListComponent } from '../grade-student-list/grade-student-list.component';

@Component({
  selector: 'select-student-for-profile',
  template: require('./select-student-for-profile.html'),
  directives: [ GradeStudentListComponent ]
})
export class SelectStudentForProfileComponent {
  nextRoute = 'Home';
}
