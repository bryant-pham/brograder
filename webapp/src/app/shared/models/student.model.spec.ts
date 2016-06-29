import { describe, it, expect } from '@angular/core/testing';

import { Student } from './student.model';
import { Assignment } from './assignment.model';
import { GradedAssignment } from './gradedAssignment.model';

describe('Student', () => {
  it('should add graded assignment', () => {
    let student = new Student.Builder().build();
    let gradedAssignment = new GradedAssignment(Assignment.Builder.buildAssignment('test'));

    student.addGradedAssignment(gradedAssignment);

    expect(student.gradedAssignments.get(gradedAssignment.getId())).toEqual(gradedAssignment);
  });

  it('should get grade for assignment by id', () => {
    let gradedAssignment = new GradedAssignment(Assignment.Builder.buildAssignment('test'));
    let student = new Student.Builder().withAssignment(gradedAssignment).build();

    let grade = student.getGradeForAssignment(gradedAssignment.getId());

    expect(grade).toEqual(gradedAssignment.grade);
  });

  it('should return true if student has completed assignment', () => {
    let gradedAssignment = new GradedAssignment(Assignment.Builder.buildAssignment('test'));
    let student = new Student.Builder().withAssignment(gradedAssignment).build();

    let result = student.hasCompletedAssignment(gradedAssignment.getId());

    expect(result).toBeTruthy();
  });

  it('should return false if student has not completed assignment', () => {
    let student = new Student.Builder().build();

    let result = student.hasCompletedAssignment('id of assignment he surely has not completed');

    expect(result).toBeFalsy();
  });
});
