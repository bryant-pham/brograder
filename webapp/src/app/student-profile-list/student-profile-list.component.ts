import { Component, ChangeDetectorRef } from '@angular/core';

import { StudentClassSearchPipe } from '../shared/pipes/student-class-filter.pipe';
import { ClassSelectorComponent } from '../grade-student-list/class-selector.component';
import { TeacherService, StudentService } from '../shared/services';
import { Student } from '../shared/models/student.model';

@Component({
  selector: 'student-profile-list',
  template: require('./student-profile-list.html'),
  styles: [ require('../shared/styles/shared.css') ],
  directives: [ ClassSelectorComponent ],
  pipes: [ StudentClassSearchPipe ]
})
export class StudentProfileListComponent {
  students: Array<Student>;
  classes: Array<string>;
  selectedClass: string;

  constructor(private studentService: StudentService,
              private teacherService: TeacherService,
              private changeDetectionRef: ChangeDetectorRef) {
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

  handleSelectedClass(event): void {
    this.selectedClass = event.value;
    this.changeDetectionRef.detectChanges();
  }
}
