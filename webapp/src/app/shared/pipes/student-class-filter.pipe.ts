import { Pipe, PipeTransform } from '@angular/core';

import { Student } from '../models';

@Pipe({
  name: 'studentsInClassFilter'
})
export class StudentClassSearchPipe implements PipeTransform {
  transform(values: Array<Student>, searchTerm): Array<Student> {
    if (!searchTerm) {
      return values;
    }
    return values.filter((student: Student) =>
      student.className.toLowerCase() === searchTerm.toLowerCase());
  }
}
