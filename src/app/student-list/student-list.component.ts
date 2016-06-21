import { Component, Input, OnInit } from '@angular/core';

import { Student } from '../shared/models';
import { StudentService, TeacherService } from '../shared/services';
import { ClassSelectorComponent } from './class-selector.component';

@Component({
  selector: 'student-list',
  template: require('./student-list.html'),
  styles: [ require('../shared/styles/shared.css') ],
  providers: [ StudentService, TeacherService ],
  directives: [ ClassSelectorComponent ]
})
export class StudentListComponent implements OnInit {
  @Input() nextRoute: string;
  students: Array<Student>;
  classes: Array<string>;

  constructor(private studentService: StudentService,
              private teacherService: TeacherService) {
  }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
    this.teacherService.getTeacher()
      .subscribe(teacher => this.classes = teacher.classes);
  }

  setCurrentStudent(student: Student) {
    this.studentService.setCurrentStudent(student);
  }
}
