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

  clone(): Assignment {
    let cloneQuestions: Question = [];
    this.questions.forEach(question => cloneQuestions.push(question.clone()));
    return new Assignment(this.name, cloneQuestions, this.dueDate);
  }
}

export module Assignment {
  export class Builder {
    static buildAssignments(...assignmentNames: Array<string>): Array<Assignment> {
      let assignments: Array<Assignment> = [];
      for (let name of assignmentNames) {
        assignments.push(Builder.buildAssignment(name));
      }
      return assignments;
    }

    static buildAssignment(assignmentName: string,
                           ...questions: Array<Question>): Assignment {
      if (questions.length === 0) {
        questions = [new Question('1', 4, 'A')];
      }
      return new Assignment(
        assignmentName,
        questions,
        new Date());
    }
  }
}
