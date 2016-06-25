import { Assignment } from './assignment.model';

export class GradedAssignment {
  assignment: Assignment;
  grade: number;

  constructor(assignment: Assignment) {
    this.assignment = assignment;
    this.calculateGrade();
  }

  getId(): string {
    return this.assignment.id;
  }

  private calculateGrade() {
    let numCorrect = 0;
    this.assignment.questions.forEach(question => {
      if (question.isCorrect) {
        numCorrect++;
      }
    });
    this.grade = Math.ceil((numCorrect / this.assignment.questions.length) * 100);
  }
}
