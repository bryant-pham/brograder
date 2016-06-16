import { describe, it, expect } from '@angular/core/testing';

import { Student } from './student.model';
import { Assignment } from './assignment.model';
import { GradedAssignment } from './gradedAssignment.model';

describe('Student', () => {
  it('should add graded assignment', () => {
    let student = new Student();
    let gradedAssignment = new GradedAssignment(Assignment.Builder.buildAssignment('test'));

    student.addGradedAssignment(gradedAssignment);

    expect(student.gradedAssignments.get(gradedAssignment.getId())).toEqual(gradedAssignment);
  });
});
