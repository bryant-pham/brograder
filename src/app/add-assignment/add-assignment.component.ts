import { Component, EventEmitter, Output } from '@angular/core';

import { Question, POSSIBLE_ANSWER_CHOICES } from '../shared/models/question.model';

@Component({
  selector: 'add-assignment',
  template: require('./add-assignment.html'),
  styles: [ require('./add-assignment.css') ]
})
export class AddAssignmentComponent {
  name: string;
  questions: Array<Question>;
  dueDate: Date;
  numAnswersPerQuestion: string;
  numOfQuestions: number;
  possibleAnswers: Array<string> = POSSIBLE_ANSWER_CHOICES;
  numOfPossibleAnswers: Array<number> = [];

  @Output() close = new EventEmitter();

  constructor() {
    this.initNumOfPossibleAnswers();
  }

  closeModal() {
    this.close.emit({value: false});
  }

  private initNumOfPossibleAnswers() {
    this.numOfPossibleAnswers
      = Array(this.possibleAnswers.length).fill().map((x, i) => i+1);
  }
}
