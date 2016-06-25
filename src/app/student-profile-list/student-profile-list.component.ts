import { Component } from '@angular/core';
import { GradeStudentListComponent } from '../grade-student-list/grade-student-list.component';

@Component({
  selector: 'student-profile-list',
  template: require('./student-profile-list.html'),
  directives: [ GradeStudentListComponent ]
})
export class StudentProfileListComponent {
  nextRoute = 'Home';
}
