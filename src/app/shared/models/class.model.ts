import { Student } from './student.model'

export class Class {
  students: Array<Student>;

  constructor(students: Array<Student>) {
    this.students = students;
  }
}

export module Class {
  export class Builder {
    static build(...students: Array<Student>) {
      return new Class(students);
    }
  }
}
