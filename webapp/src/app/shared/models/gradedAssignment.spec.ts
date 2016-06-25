import { describe, it, expect } from '@angular/core/testing';

import { GradedAssignment } from './gradedAssignment.model';
import { Assignment } from './assignment.model';
import { Question } from './question.model';

describe('GradedAssignment', () => {
  it('should grade assignment on construction, grade averages with no remainder', () => {
    let questions = Question.Builder.createMultiple('A', 'B');
    questions.forEach(question => question.answer('A'));
    let assignment = new Assignment('test', questions, new Date());

    let result = new GradedAssignment(assignment);

    expect(result.grade).toBe(50);
  });

  it('grade averages with any remainder should round up', () => {
    let questions = Question.Builder.createMultiple('A', 'B', 'A');
    questions.forEach(question => question.answer('A'));
    let assignment = new Assignment('test', questions, new Date());

    let result = new GradedAssignment(assignment);

    expect(result.grade).toBe(67);
  });

  it('should return assignment id', () => {
    let assignment = new Assignment('test', [], new Date(), '1');

    let result = new GradedAssignment(assignment);

    expect(result.getId()).toBe(assignment.id);
  });
});
