import { Component, EventEmitter, Output } from '@angular/core';

import { Question, POSSIBLE_ANSWER_CHOICES } from '../shared/models/question.model';
import { AssignmentService } from '../shared/services';

@Component({
  selector: 'add-assignment',
  template: require('./add-assignment.html'),
  styles: [ require('./add-assignment.css') ],
  providers: [ AssignmentService ]
})
export class AddAssignmentComponent {
  name: string;
  dueDate: Date;
  questions: Array<Question>;
  numAnswersPerQuestion: number;
  numOfQuestions: number;
  possibleAnswers: Array<string>;

  // Constant variables
  allAnswers: Array<string> = POSSIBLE_ANSWER_CHOICES;
  numOfPossibleAnswers: Array<number>;

  @Output() close = new EventEmitter();

  constructor(private assignmentService: AssignmentService) {
    this.initNumOfPossibleAnswers();
    this.resetForm();
  }

  closeModal(): void {
    this.close.emit({value: 'closeModal'});
  }

  onNumAnswersPerQuestionChange() {
    this.changePossibleAnswers();
    this.setNumOfAnswersForAllQuestions();
  }

  generateQuestions(): void {
    if (this.numOfQuestions < this.questions.length && this.numOfQuestions) {
      this.removeQuestions();
    } else {
      this.createQuestions();
    }
  }

  save(): void {
    this.assignmentService.saveAssignment(this.name, this.questions, this.dueDate);
    this.closeModal();
    this.resetForm();
  }

  private changePossibleAnswers(): void {
    this.possibleAnswers = [];
    for (let i = 0; i < this.numAnswersPerQuestion; i++) {
      this.possibleAnswers.push(this.allAnswers[i]);
    }
  }

  private setNumOfAnswersForAllQuestions(): void {
    for (let question of this.questions) {
      question.numOfAnswers = this.numAnswersPerQuestion;
    }
  }

  private removeQuestions(): void {
    console.log(this.numOfQuestions);
    this.questions.splice(this.numOfQuestions);
  }

  private createQuestions(): void {
    for (let i = this.questions.length + 1; i <= this.numOfQuestions; i++) {
      this.questions.push(new Question(String(i), this.numAnswersPerQuestion, undefined));
    }
  }

  private initNumOfPossibleAnswers(): void {
    this.numOfPossibleAnswers
      = Array(this.allAnswers.length).fill().map((x, i) => i + 1);
  }

  private resetForm(): void {
    this.name = undefined;
    this.dueDate = undefined;
    this.questions = [];
    this.numAnswersPerQuestion = 0;
    this.numOfQuestions = 0;
    this.possibleAnswers = [];
  }
}
