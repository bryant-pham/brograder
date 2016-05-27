import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

import { QuestionViewComponent } from './question-view.component';
import { Question } from '../shared/models/question.model';

describe('QuestionViewComponent', () => {
  beforeEachProviders(() => [
    QuestionViewComponent
  ]);

  let component: QuestionViewComponent;
  let possibleQuestions = [
    new Question('1', 4, 'A'),
    new Question('2', 4, 'A'),
    new Question('3', 4, 'A')
  ];

  beforeEach(inject([QuestionViewComponent], (comp) => {
    component = comp;
    component.questions = possibleQuestions;
  }));

  it('current question should be set to first question on init', () => {
    component.ngOnInit();

    expect(component.currentQuestion.questionNumber).toBe('1');
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should not go to previous question if currently on first question', () => {
    // Set to first question
    component.currentQuestion = possibleQuestions[0];
    component.currentQuestionIndex = 0;

    component.prevQuestion();

    expect(component.currentQuestion.questionNumber).toBe('1');
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should go to previous question', () => {
    // Set to second question
    component.currentQuestion = possibleQuestions[1];
    component.currentQuestionIndex = 1;

    component.prevQuestion();

    expect(component.currentQuestion.questionNumber).toBe('1');
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should not go to next question if currently on last question', () => {
    // Set to last question
    component.currentQuestion = possibleQuestions[2];
    component.currentQuestionIndex = 2;

    component.nextQuestion();

    expect(component.currentQuestion.questionNumber).toBe('3');
    expect(component.currentQuestionIndex).toBe(2);
  });

  it('should go to next question', () => {
    component.nextQuestion();

    expect(component.currentQuestion.questionNumber).toBe('2');
    expect(component.currentQuestionIndex).toBe(1);
  });

  it('atLastQuestion should return true if at last question', () => {
    // Set to last question
    component.currentQuestion = possibleQuestions[2];
    component.currentQuestionIndex = 2;

    let result = component.atLastQuestion();

    expect(result).toBeTruthy();
  });

  it('atLastQuestion should return false if not at last question', () => {
    // Set to last question
    component.currentQuestion = possibleQuestions[0];
    component.currentQuestionIndex = 0;

    let result = component.atLastQuestion();

    expect(result).toBeFalsy();
  });
});
