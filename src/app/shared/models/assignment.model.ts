import { Question } from './question.model';

export class Assignment {
  name: string;
  questions: Array<Question>;
  dueDate: Date;
  numOfQuestions; number;

  constructor(name: string, questions: Array<Question>, dueDate: Date) {
    this.name = name;
    this.questions = questions;
    this.dueDate = dueDate;
    this.numOfQuestions = this.questions.length;
  }
}

export module Assignment {
  'use strict';
  export class TestBuilder {
    static buildAssignments(...assignmentNames: Array<string>): Array<Assignment> {
      let assignments: Array<Assignment> = [];
      for (let name of assignmentNames) {
        assignments.push(TestBuilder.buildAssignment(name));
      }
      return assignments;
    }

    static buildAssignment(assignmentName: string): Assignment {
      return new Assignment(
        assignmentName,
        [new Question('1', 4, 'A')],
        new Date());
    }
  }
}
