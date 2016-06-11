import { Component, EventEmitter, Output } from '@angular/core';

import { Question, POSSIBLE_ANSWER_CHOICES } from '../shared/models/question.model';

@Component({
  selector: 'add-assignment',
  template: require('./add-assignment.html'),
  styles: [ require('./add-assignment.css') ]
})
export class AddAssignmentComponent {
  name: string;
  questions: Array<Question> = [];
  dueDate: Date;
  numAnswersPerQuestion: number;
  numOfQuestions: number;
  allAnswers: Array<string> = POSSIBLE_ANSWER_CHOICES;
  numOfPossibleAnswers: Array<number>;
  possibleAnswers: Array<string> = [];

  @Output() close = new EventEmitter();

  constructor() {
    this.initNumOfPossibleAnswers();
  }

  closeModal() {
    this.close.emit({value: false});
  }

  changePossibleAnswers() {
    this.possibleAnswers = [];
    for (let i = 0; i < this.numAnswersPerQuestion; i++) {
      this.possibleAnswers.push(this.allAnswers[i]);
    }
    console.log(this.possibleAnswers);
  }

  private initNumOfPossibleAnswers() {
    this.numOfPossibleAnswers
      = Array(this.allAnswers.length).fill().map((x, i) => i+1);
  }
}
