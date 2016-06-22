import { Question } from './question.model';

export class Assignment {
  id: string;
  name: string;
  questions: Array<Question>;
  dueDate: Date;
  numOfQuestions; number;

  constructor(name: string, questions: Array<Question>, dueDate: Date, id?: string) {
    this.name = name;
    this.questions = questions;
    this.dueDate = dueDate;
    this.numOfQuestions = this.questions.length;
    this.id = id;
  }

  clone(): Assignment {
    let cloneQuestions: Array<Question> = [];
    this.questions.forEach(question => cloneQuestions.push(question.clone()));
    return new Assignment(this.name, cloneQuestions, this.dueDate, this.id);
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
        questions = [];
        for (let i = 1; i <= 10; i++) {
          questions.push(new Question(String(i), 4, 'A'));
        }
      }
      return new Assignment(
        assignmentName,
        questions,
        new Date(),
        String(Math.floor(Math.random() * (100))));
    }
  }
}
