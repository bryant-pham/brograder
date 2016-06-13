import { Component, Input } from '@angular/core';

import { Class, Student } from '../shared/models';
import { ClassService, StudentService } from '../shared/services';
import { ClassSelectorComponent } from './class-selector.component';

@Component({
  selector: 'student-list',
  template: require('./student-list.html'),
  styles: [ require('../shared/styles/shared.css') ],
  providers: [ ClassService, StudentService ],
  directives: [ ClassSelectorComponent ]
})
export class StudentListComponent {
  @Input() nextRoute: string;
  currentClass: Class;

  constructor(private classService: ClassService,
              private studentService: StudentService) {
    this.classService.getCurrentClass()
      .subscribe(currentClass => this.currentClass = currentClass);
  }

  setCurrentStudent(student: Student) {
    this.studentService.setCurrentStudent(student);
  }
}
