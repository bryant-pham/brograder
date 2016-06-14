import { Component } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'select-student-for-profile',
  template: require('./select-student-for-profile.html'),
  directives: [ StudentListComponent ]
})
export class SelectStudentForProfileComponent {
  nextRoute = 'Home';
}
