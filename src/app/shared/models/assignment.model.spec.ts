import { describe, it, expect } from '@angular/core/testing';

import { Assignment } from './assignment.model';
import { Question } from './question.model';

describe('Assignment', () => {
  it('should clone assignment clearing answers to questions', () => {
    let question = new Question('1', 5, 'A');
    question.answer('A');
    let assignment = Assignment.Builder.buildAssignment('test', question);

    let clone = assignment.clone();

    expect(clone.name).toEqual(assignment.name);
    expect(clone.dueDate).toEqual(assignment.dueDate);
    expect(clone.questions[0].userAnswer).toBeUndefined();
  });

  describe('Builder', () => {
    it('should build assignment with default questions if not passed in', () => {
      let assignment = Assignment.Builder.buildAssignment('test');

      expect(assignment.questions).toEqual([new Question('1', 4, 'A')]);
      expect(assignment.questions.length).toBe(1);
      expect(assignment.name).toBe('test');
      expect(assignment.dueDate).toBeDefined();
      expect(assignment.numOfQuestions).toBe(1);
    });

    it('should build assignment with specified questions', () => {
      let assignment = Assignment.Builder
        .buildAssignment(
          'test',
          new Question('1', 4, 'B'),
          new Question('1', 4, 'B'));

      expect(assignment.questions).toEqual([
        new Question('1', 4, 'B'),
        new Question('1', 4, 'B')]);
      expect(assignment.questions.length).toBe(2);
      expect(assignment.name).toBe('test');
      expect(assignment.dueDate).toBeDefined();
      expect(assignment.numOfQuestions).toBe(2);
    });

    it('should build multiple assignments specified names and default questions', () => {
      let assignments = Assignment.Builder.buildAssignments('test1', 'test2');

      expect(assignments.length).toBe(2);

      expect(assignments[0].name).toBe('test1');
      expect(assignments[0].questions).toEqual([new Question('1', 4, 'A')]);
      expect(assignments[0].dueDate).toBeDefined();
      expect(assignments[0].numOfQuestions).toBe(1);

      expect(assignments[1].name).toBe('test2');
      expect(assignments[1].questions).toEqual([new Question('1', 4, 'A')]);
      expect(assignments[1].dueDate).toBeDefined();
      expect(assignments[1].numOfQuestions).toBe(1);
    });
  });
});
