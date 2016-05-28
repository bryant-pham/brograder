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

  let setToQuestionNumber = (questionNumber: number) => {
    let index = questionNumber - 1;
    component.currentQuestion = possibleQuestions[index];
    component.currentQuestionIndex = index;
  };

  let expectCurrentQuestionNumberToBe = (questionNumber: number) => {
    expect(component.currentQuestion.questionNumber).toBe(String(questionNumber));
    expect(component.currentQuestionIndex).toBe(--questionNumber);
  };

  it('current question should be set to first question on init', () => {
    component.ngOnInit();

    expectCurrentQuestionNumberToBe(1);
  });

  it('should not go to previous question if currently on first question', () => {
    setToQuestionNumber(1);

    component.prevQuestion();

    expectCurrentQuestionNumberToBe(1);
  });

  it('should go to previous question', () => {
    setToQuestionNumber(2);

    component.prevQuestion();

    expectCurrentQuestionNumberToBe(1);
  });

  it('should not go to next question if currently on last question', () => {
    setToQuestionNumber(3);

    component.nextQuestion();

    expectCurrentQuestionNumberToBe(3);
  });

  it('should go to next question', () => {
    setToQuestionNumber(1);

    component.nextQuestion();

    expectCurrentQuestionNumberToBe(2);
  });

  it('atLastQuestion should return true if at last question', () => {
    setToQuestionNumber(3);

    let result = component.atLastQuestion();

    expect(result).toBeTruthy();
  });

  it('atLastQuestion should return false if not at last question', () => {
    setToQuestionNumber(1);

    let result = component.atLastQuestion();

    expect(result).toBeFalsy();
  });

  it('return primary button style when answer choice in markup ' +
    'does not match user\'s answer', () => {
    setToQuestionNumber(1);
    component.currentQuestion.userAnswer = 'A';

    let result = component.answerButtonColor('B');

    expect(result).toBe('primary');
  });

  it('return accent button style when answer choice in markup matches user\'s answer', () => {
    setToQuestionNumber(1);
    component.currentQuestion.userAnswer = 'A';

    let result = component.answerButtonColor('A');

    expect(result).toBe('accent');
  });

  it('answering question sets user answer choice and moves to next question', () => {
    setToQuestionNumber(1);

    component.answerQuestion('A');

    expect(component.questions[0].userAnswer).toBe('A');
    expectCurrentQuestionNumberToBe(2);
  });
});
