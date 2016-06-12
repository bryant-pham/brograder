import { Component, EventEmitter, Output } from '@angular/core';

import { Question, POSSIBLE_ANSWER_CHOICES } from '../shared/models/question.model';

@Component({
  selector: 'add-assignment',
  template: require('./add-assignment.html'),
  styles: [ require('./add-assignment.css') ]
})
export class AddAssignmentComponent {
  name: string;
  dueDate: Date;
  questions: Array<Question> = [];
  numAnswersPerQuestion: number = 0;
  numOfQuestions: number;
  allAnswers: Array<string> = POSSIBLE_ANSWER_CHOICES;
  numOfPossibleAnswers: Array<number>;
  possibleAnswers: Array<string> = [];

  @Output() close = new EventEmitter();

  constructor() {
    this.initNumOfPossibleAnswers();
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
}
