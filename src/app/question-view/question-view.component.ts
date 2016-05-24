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
  currentQuestionIndex: number = 0;

  ngOnInit() {
    this.assignment = 'Social Studies DA';
    this.questions = [
      new Question(1, 4, 'A'),
      new Question(2, 4, 'A'),
      new Question(3, 4, 'A'),
      new Question(4, 4, 'A'),
      new Question(5, 4, 'A'),
      new Question(6, 4, 'A')
    ];
    this.setCurrentQuestion();
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex !== 0) {
      this.currentQuestionIndex--;
      this.setCurrentQuestion();
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex !== this.questions.length-1) {
      this.currentQuestionIndex++;
      this.setCurrentQuestion();
    }
  }

  setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }
}
