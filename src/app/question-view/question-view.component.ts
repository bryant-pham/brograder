import { Component, HostListener, provide } from '@angular/core';

import { Question } from '../shared/models/question.model';
import { AssignmentService } from '../shared/services/assignment.service';
import { Assignment } from '../shared/models/assignment.model';
import { KeyMapper, KEYMAPPER_TOKEN, KEYMAPPER_CONFIG } from '../shared/keymapper';

let jquery = require('jquery');

@Component({
  selector: 'bro-question-view',
  template: require('./question-view.component.html'),
  styles: [ require('./question-view.component.css') ],
  providers: [
    AssignmentService,
    KeyMapper,
    provide(KEYMAPPER_TOKEN, {useValue: KEYMAPPER_CONFIG})
  ]
})
export class QuestionViewComponent {
  questions: Array<Question> = [];
  assignment: Assignment;
  currentQuestion: Question;
  currentQuestionIndex: number = 0;

  constructor(
    private currentAssignmentService: AssignmentService,
    private keymapper: KeyMapper) {
  }

  ngOnInit() {
    this.currentAssignmentService.getCurrentAssignment()
      .subscribe((assignment: Assignment) => {
        this.assignment = assignment;
        this.questions = assignment.questions;
        this.setCurrentQuestion();
      });
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

  @HostListener('document:keypress', ['$event'])
  answerQuestionFromKey(event: KeyboardEvent) {
    console.log(event.code);
    let answerChoice = this.keymapper.getValFromKeyCode(event.code);
    this.answerQuestion(answerChoice);
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
