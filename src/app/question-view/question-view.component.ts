import { Component } from '@angular/core';

import { Question } from '../shared/models/question.model';

let jquery = require('jquery');

@Component({
  selector: 'bro-question-view',
  template: require('./question-view.component.html'),
  styles: [ require('./question-view.component.css') ]
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
    if (!this.atFirstQuestion()) {
      this.currentQuestionIndex--;
      this.setCurrentQuestion();
      this.prevQuestionAnimation();
    }
  }

  nextQuestion(): void {
    if (!this.atLastQuestion()) {
      this.currentQuestionIndex++;
      this.setCurrentQuestion();
      this.nextQuestionAnimation();
    }
  }

  atLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  answerButtonColor(answerChoice: string): string {
    return answerChoice !== this.currentQuestion.userAnswer ? 'primary' : 'accent';
  }

  answerQuestion(answerChoice: string): void {
    this.currentQuestion.answer(answerChoice);
    this.nextQuestion();
  }

  private atFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }

  private setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  private nextQuestionAnimation(): void {
    let answerButtons = jquery('.answer-buttons');
    answerButtons.addClass('next-question-slide');

    // Greatest hack ever to remove class after animation is done
    // set timeout to 500 because animation-duration is 0.5s
    // Will refactor when ng-animate is released
    setTimeout(() => {
      answerButtons.removeClass('next-question-slide');
    }, 500);
  }

  private prevQuestionAnimation(): void {
    let answerButtons = jquery('.answer-buttons');
    answerButtons.addClass('prev-question-slide');

    // Greatest hack ever to remove class after animation is done
    // set timeout to 500 because animation-duration is 0.5s
    // Will refactor when ng-animate is released
    setTimeout(() => {
      answerButtons.removeClass('prev-question-slide');
    }, 500);
  }
}
