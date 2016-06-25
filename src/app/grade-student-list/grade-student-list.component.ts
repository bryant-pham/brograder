import { Component, OnInit } from '@angular/core';

import { Student, Assignment } from '../shared/models';
import { StudentService, TeacherService, AssignmentService } from '../shared/services';
import { ClassSelectorComponent } from './class-selector.component';
import { StudentClassSearchPipe } from '../shared/pipes/student-class-filter.pipe';

@Component({
  selector: 'grade-student-list',
  template: require('./grade-student-list.html'),
  styles: [ require('../shared/styles/shared.css') ],
  providers: [ StudentService, TeacherService, AssignmentService ],
  directives: [ ClassSelectorComponent ],
  pipes: [ StudentClassSearchPipe ]
})
export class GradeStudentListComponent implements OnInit {
  students: Array<Student>;
  classes: Array<string>;
  selectedClass: string;
  currentAssignment: Assignment;

  constructor(private studentService: StudentService,
              private teacherService: TeacherService,
              private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
    this.teacherService.getTeacher()
      .subscribe(teacher => this.classes = teacher.classes);
    this.assignmentService.getCurrentAssignment()
      .subscribe(currentAssignment => this.currentAssignment = currentAssignment);
  }

  setCurrentStudent(student: Student) {
    this.studentService.setCurrentStudent(student);
  }

  handleSelectedClass(event): void {
    this.selectedClass = event.value;
  }

  hasCompletedAssignment(student: Student): boolean {
    return student.hasCompletedAssignment(this.currentAssignment.id);
  }

  getGrade(student: Student): number {
    return student.getGradeForAssignment(this.currentAssignment.id);
  }
}
