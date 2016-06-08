import { Student } from './student.model'

export class Class {
  name: string;
  students: Array<Student>;

  constructor(name: string, students: Array<Student>) {
    this.name = name;
    this.students = students;
  }
}

export module Class {
  export class Builder {
    static build(name: string, ...students = [new Student('john', 'cena')]) {
      return new Class(name, students);
    }
  }
}
