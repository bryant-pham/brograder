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
});
