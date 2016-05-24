import { Component, Input } from '@angular/core';

import { Question } from "../shared/models/question.model";

@Component({
  selector: 'bro-question-card',
  template: require('./questionCard.component.html'),
  styles: [ require('./questionCard.component.css') ]
})
export class QuestionCardComponent {
  @Input() assignment: string;
  @Input() question: Question;
}
