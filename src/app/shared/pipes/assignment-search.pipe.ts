import { Pipe, PipeTransform } from '@angular/core';

import { Assignment } from "../models/assignment.model";

@Pipe({
  name: 'assignmentSearch'
})
export class AssignmentSearchPipe implements PipeTransform {
  transform(values: Array<Assignment>, searchTerm) {
    return values.filter((value) => value.name.toLowerCase().includes(searchTerm));
  }
}
