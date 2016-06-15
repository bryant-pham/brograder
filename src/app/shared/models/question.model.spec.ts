import { describe, it, expect } from '@angular/core/testing';

import { Question } from './question.model';

describe('Question model', () => {
  it('should create a new Question object', () => {
    let question = new Question('1', 5, 'A');

    expect(question.questionNumber).toBe('1');
    expect(question.numOfAnswers).toBe(5);
    expect(question.answerChoices).toEqual(['A', 'B', 'C', 'D', 'E']);
    expect(question.correctAnswer).toBe('A');
    expect(question.userAnswer).toBeUndefined();
    expect(question.isCorrect).toBeFalsy();
  });

  it('question\'s possible answers should be A when number of answers is 1', () => {
    let question = new Question('1', 1, 'A');

    expect(question.answerChoices).toEqual(['A']);
  });

  it('question\'s possible answers should be A, B when number of answers is 2', () => {
    let question = new Question('1', 2, 'A');

    expect(question.answerChoices).toEqual(['A', 'B']);
  });

  it('question\'s possible answers should be A, B, C when number of answers is 3', () => {
    let question = new Question('1', 3, 'A');

    expect(question.answerChoices).toEqual(['A', 'B', 'C']);
  });

  it('question\'s possible answers should be A, B, C, D when number of answers is 4', () => {
    let question = new Question('1', 4, 'A');

    expect(question.answerChoices).toEqual(['A', 'B', 'C', 'D']);
  });

  it('question\'s possible answers should be A, B, C, D, E when number of answers is 5', () => {
    let question = new Question('1', 5, 'A');

    expect(question.answerChoices).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  it('question should default to incorrect if it has not been answered', () => {
    let question = new Question('1', 5, 'A');

    expect(question.isCorrect).toBeFalsy();
  });

  it('question should be incorrect if user and correct answers differ', () => {
    let question = new Question('1', 5, 'A');

    question.answer('B');

    expect(question.isCorrect).toBeFalsy();
  });

  it('question should be correct if user and correct answers are same', () => {
    let question = new Question('1', 5, 'A');

    question.answer('A');

    expect(question.isCorrect).toBeTruthy();
  });

  it('cloning should return new question object without any user answers', () => {
    let question = new Question('1', 5, 'A');
    question.answer('A');

    let clone = question.clone();

    expect(clone.questionNumber).toBe('1');
    expect(clone.numOfAnswers).toBe(5);
    expect(clone.correctAnswer).toBe('A');
    expect(clone.userAnswer).toBeUndefined();
  })
});
