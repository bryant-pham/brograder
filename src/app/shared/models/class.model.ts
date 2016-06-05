import { Student } from './student.model'

export class Class {
  students: Array<Student>;

  constructor(students: Array<Student>) {
    this.students = students;
  }
}
