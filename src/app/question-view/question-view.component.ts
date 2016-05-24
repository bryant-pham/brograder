import { Component } from '@angular/core';

import { Question } from "../shared/models/question.model";
import { QuestionCardComponent } from "../question-card/questionCard.component";

@Component({
  selector: 'bro-question-view',
  template: require('./question-view.component.html'),
  styles: [ require('./question-view.component.css') ],
  directives: [ QuestionCardComponent ]
})
export class QuestionViewComponent {
  questions: Array<Question>;
  assignment: string;
  currentQuestion: Question;

  ngOnInit() {
    this.assignment = 'Social Studies DA';
    this.questions = [
      new Question(1, 4, 'A'),
      new Question(1, 4, 'A'),
      new Question(1, 4, 'A'),
      new Question(1, 4, 'A'),
      new Question(1, 4, 'A'),
      new Question(1, 4, 'A')
    ];
    this.currentQuestion = this.questions[0];
  }
}
