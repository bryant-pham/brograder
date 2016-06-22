import { Component, Input, OnInit } from '@angular/core';

import { Student, Assignment } from '../shared/models';
import { StudentService, TeacherService, AssignmentService } from '../shared/services';
import { ClassSelectorComponent } from './class-selector.component';
import { StudentClassSearchPipe } from '../shared/pipes/student-class-filter.pipe';

@Component({
  selector: 'student-list',
  template: require('./student-list.html'),
  styles: [ require('../shared/styles/shared.css') ],
  providers: [ StudentService, TeacherService, AssignmentService ],
  directives: [ ClassSelectorComponent ],
  pipes: [ StudentClassSearchPipe ]
})
export class StudentListComponent implements OnInit {
  @Input() nextRoute: string;
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
      .subscribe(students => {
        this.students = students;
        console.log(students);
      });
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

  getGrade(student: Student): string {
    return student.getGradeForAssignment(this.currentAssignment.id);
  }
}
