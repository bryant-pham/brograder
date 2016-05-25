import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Question } from "../shared/models/question.model";

@Component({
  selector: 'bro-question-card',
  template: require('./questionCard.component.html'),
  styles: [ require('./questionCard.component.css') ]
})
export class QuestionCardComponent {
  @Input() assignment: string;
  @Input() question: Question;
  @Output() answered: EventEmitter<any> = new EventEmitter<any>();

  answerQuestion(answerChoice: string): void {
    this.question.answer(answerChoice);
    this.answered.emit({value: this.question});
  }
}
