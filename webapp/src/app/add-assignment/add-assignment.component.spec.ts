import {
  beforeEachProviders,
  describe,
  inject,
  it,
  expect,
  beforeEach
} from '@angular/core/testing';
import { provide } from '@angular/core';

import { AddAssignmentComponent } from './add-assignment.component';
import { Question } from '../shared/models/question.model';
import { AssignmentService } from '../shared/services';

class MockAssignmentService {
  saveAssignment(name: string, questions: Array<Question>, dueDate: Date) {
    // No operation
  }
}

describe('AddAssignmentComponent', () => {
  beforeEachProviders(() => [
    AddAssignmentComponent,
    provide(AssignmentService, {useClass: MockAssignmentService})
  ]);

  let component: AddAssignmentComponent;

  beforeEach(inject([AddAssignmentComponent], (comp: AddAssignmentComponent) => {
    component = comp;
  }));

  it('should initialize array of number of possible answer on construction', () => {
    expect(component.numOfPossibleAnswers).toEqual([1, 2, 3, 4, 5]);
  });

  it('should reset form on construction', () => {
    expect(component.name).toBeUndefined();
    expect(component.dueDate).toBeUndefined();
    expect(component.questions).toEqual([]);
    expect(component.numAnswersPerQuestion).toBe(0);
    expect(component.numOfQuestions).toBe(0);
    expect(component.possibleAnswers).toEqual([]);
  });

  it('should emit closeModal event', () => {
    component.close.subscribe(event => {
      expect(event.value).toBe('closeModal');
    });

    component.closeModal();
  });

  it('generate question number 1 from none with 2 answer choices', () => {
    component.numAnswersPerQuestion = 2;

    component.numOfQuestions = 1;
    component.generateQuestions();

    expect(component.questions).toEqual([
      new Question('1', 2, undefined)
    ]);
  });

  it('generate question number 2 after 1 with 2 answer choices', () => {
    component.numAnswersPerQuestion = 2;
    component.questions = [new Question('1', 2, undefined)];

    component.numOfQuestions = 2;
    component.generateQuestions();

    expect(component.questions).toEqual([
      new Question('1', 2, undefined),
      new Question('2', 2, undefined)
    ]);
  });

  it('remove all questions up to question 1 when numOfQuestions changes to 1', () => {
    component.numAnswersPerQuestion = 2;
    component.questions = [
      new Question('1', 2, undefined),
      new Question('2', 2, undefined)
    ];

    component.numOfQuestions = 1;
    component.generateQuestions();

    expect(component.questions).toEqual([
      new Question('1', 2, undefined)
    ]);
  });

  it('should not remove all questions when numOfQuestions is blanked out', () => {
    component.numAnswersPerQuestion = 2;
    component.questions = [
      new Question('1', 2, undefined)
    ];

    component.numOfQuestions = undefined;
    component.generateQuestions();

    expect(component.questions).toEqual([
      new Question('1', 2, undefined)
    ]);
  });

  it('should not remove all questions when numOfQuestions is empty string', () => {
    component.numAnswersPerQuestion = 2;
    component.questions = [
      new Question('1', 2, undefined)
    ];

    component.numOfQuestions = '';
    component.generateQuestions();

    expect(component.questions).toEqual([
      new Question('1', 2, undefined)
    ]);
  });

  it('should save assignment', inject([AssignmentService], (assignmentService) => {
    component.name = 'test';
    component.dueDate = new Date('2015-01-01');
    component.questions = [];
    spyOn(assignmentService, 'saveAssignment');

    component.save();

    expect(assignmentService.saveAssignment).toHaveBeenCalledWith('test', [], new Date('2015-01-01'));
  }));

  it('should emit close event when saving assignment', () => {
    spyOn(component.close, 'emit');

    component.save();

    expect(component.close.emit).toHaveBeenCalledWith({value: 'closeModal'});
  });

  it('saving assignment should reset form', () => {
    component.name = 'test';
    component.dueDate = new Date('2015-01-01');
    component.questions = [];
    component.numAnswersPerQuestion = 1;
    component.numOfQuestions = 4;
    component.possibleAnswers = ['A'];

    component.save();

    expect(component.name).toBeUndefined();
    expect(component.dueDate).toBeUndefined();
    expect(component.questions).toEqual([]);
    expect(component.numAnswersPerQuestion).toBe(0);
    expect(component.numOfQuestions).toBe(0);
    expect(component.possibleAnswers).toEqual([]);
  });

  describe('onNumAnswersPerQuestionChange tests', () => {
    beforeEach(() => {
      component.numAnswersPerQuestion = 4;
      component.questions = [new Question('1', 4, undefined)];
      component.numOfQuestions = '1';
    });

    it('questions should have 0 numOfAnswers when numOfAnswersPerQuestion changed to 0', () => {
      component.numAnswersPerQuestion = 0;

      component.onNumAnswersPerQuestionChange();

      component.questions.forEach(question => {
        expect(question.numOfAnswers).toBe(0);
      });
    });

    it('questions should have 1 numOfAnswers when numOfAnswersPerQuestion changed to 1', () => {
      component.numAnswersPerQuestion = 1;

      component.onNumAnswersPerQuestionChange();

      component.questions.forEach(question => {
        expect(question.numOfAnswers).toBe(1);
      });
    });

    it('questions should have 2 numOfAnswers when numOfAnswersPerQuestion changed to 2', () => {
      component.numAnswersPerQuestion = 2;

      component.onNumAnswersPerQuestionChange();

      component.questions.forEach(question => {
        expect(question.numOfAnswers).toBe(2);
      });
    });

    it('questions should have 3 numOfAnswers when numOfAnswersPerQuestion changed to 3', () => {
      component.numAnswersPerQuestion = 3;

      component.onNumAnswersPerQuestionChange();

      component.questions.forEach(question => {
        expect(question.numOfAnswers).toBe(3);
      });
    });

    it('questions should have 4 numOfAnswers when numOfAnswersPerQuestion changed to 4', () => {
      component.numAnswersPerQuestion = 4;

      component.onNumAnswersPerQuestionChange();

      component.questions.forEach(question => {
        expect(question.numOfAnswers).toBe(4);
      });
    });

    it('questions should have 5 numOfAnswers when numOfAnswersPerQuestion changed to 5', () => {
      component.numAnswersPerQuestion = 5;

      component.onNumAnswersPerQuestionChange();

      component.questions.forEach(question => {
        expect(question.numOfAnswers).toBe(5);
      });
    });

    it('there should be no possible answers if numOfAnswersPerQuestion is 0', () => {
      component.numAnswersPerQuestion = 0;

      component.onNumAnswersPerQuestionChange();

      expect(component.possibleAnswers).toEqual([]);
    });

    it('possible answers should be A if numOfAnswersPerQuestion is 1', () => {
      component.numAnswersPerQuestion = 1;

      component.onNumAnswersPerQuestionChange();

      expect(component.possibleAnswers).toEqual(['A']);
    });

    it('possible answers should be A, B if numOfAnswersPerQuestion is 2', () => {
      component.numAnswersPerQuestion = 2;

      component.onNumAnswersPerQuestionChange();

      expect(component.possibleAnswers).toEqual(['A', 'B']);
    });

    it('possible answers should be A, B, C if numOfAnswersPerQuestion is 3', () => {
      component.numAnswersPerQuestion = 3;

      component.onNumAnswersPerQuestionChange();

      expect(component.possibleAnswers).toEqual(['A', 'B', 'C']);
    });

    it('possible answers should be A, B, C, D if numOfAnswersPerQuestion is 4', () => {
      component.numAnswersPerQuestion = 4;

      component.onNumAnswersPerQuestionChange();

      expect(component.possibleAnswers).toEqual(['A', 'B', 'C', 'D']);
    });

    it('possible answers should be A, B, C, D, E if numOfAnswersPerQuestion is 5', () => {
      component.numAnswersPerQuestion = 5;

      component.onNumAnswersPerQuestionChange();

      expect(component.possibleAnswers).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
  });
});
