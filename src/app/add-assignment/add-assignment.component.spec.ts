import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

import { AddAssignmentComponent } from './add-assignment.component';

describe('AddAssignmentComponent', () => {
  beforeEachProviders(() => [
    AddAssignmentComponent
  ]);

  let component: AddAssignmentComponent;

  beforeEach(inject([AddAssignmentComponent], (comp: AddAssignmentComponent) => {
    component = comp;
  }));

  it('should initialize array of number of possible answer on construction', () => {
    expect(component.numOfPossibleAnswers).toEqual([1, 2, 3, 4, 5]);
  });

  it('should emit closeModal event', () => {
    component.close.subscribe(event => {
      expect(event.value).toBe('closeModal');
    });

    component.closeModal();
  });

  it('there should be no possible answers if numOfAnswersPerQuestion is 0', () => {
    component.numAnswersPerQuestion = 0;

    component.changePossibleAnswers();

    expect(component.possibleAnswers).toEqual([]);
  });

  it('possible answers should be A if numOfAnswersPerQuestion is 1', () => {
    component.numAnswersPerQuestion = 1;

    component.changePossibleAnswers();

    expect(component.possibleAnswers).toEqual(['A']);
  });

  it('possible answers should be A, B if numOfAnswersPerQuestion is 2', () => {
    component.numAnswersPerQuestion = 2;

    component.changePossibleAnswers();

    expect(component.possibleAnswers).toEqual(['A', 'B']);
  });

  it('possible answers should be A, B, C if numOfAnswersPerQuestion is 3', () => {
    component.numAnswersPerQuestion = 3;

    component.changePossibleAnswers();

    expect(component.possibleAnswers).toEqual(['A', 'B', 'C']);
  });

  it('possible answers should be A, B, C, D if numOfAnswersPerQuestion is 4', () => {
    component.numAnswersPerQuestion = 4;

    component.changePossibleAnswers();

    expect(component.possibleAnswers).toEqual(['A', 'B', 'C', 'D']);
  });

  it('possible answers should be A, B, C, D, E if numOfAnswersPerQuestion is 5', () => {
    component.numAnswersPerQuestion = 5;

    component.changePossibleAnswers();

    expect(component.possibleAnswers).toEqual(['A', 'B', 'C', 'D', 'E']);
  });
});
