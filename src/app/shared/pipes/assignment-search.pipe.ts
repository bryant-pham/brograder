import { Pipe, PipeTransform } from '@angular/core';

import { Assignment } from "../models/assignment.model";

@Pipe({
  name: 'assignmentSearch'
})
export class AssignmentSearchPipe implements PipeTransform {
  transform(values: Array<Assignment>, searchTerm): Array<Assignment> {
    if (!searchTerm) {
      return values;
    }
    return values.filter((value) =>
      value.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
