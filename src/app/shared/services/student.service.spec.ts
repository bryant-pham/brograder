import {
  beforeEachProviders,
  describe,
  inject,
  it,
  beforeEach
} from '@angular/core/testing';
import { provideStore, Store } from '@ngrx/store';

import { StudentService } from './student.service';
import { AppStore } from '../reducers/app.store';
import { Student } from '../models';
import {
  REDUCERS,
  SET_CURRENT_STUDENT,
  CURRENT_STUDENT
} from '../reducers/index';

describe('StudentService', () => {
  beforeEachProviders(() => [
    StudentService,
    provideStore(REDUCERS)
  ]);

  let service: StudentService;
  let store: Store<AppStore>;

  beforeEach(inject([StudentService, Store], (serv, sto) => {
    service = serv;
    store = sto;
  }));

  it('should get current student', () => {
    let expectedStudent = new Student('john', 'cena');
    store.dispatch({type: SET_CURRENT_STUDENT, payload: expectedStudent});

    service.getCurrentStudent()
      .subscribe(currentStudent => {
        expect(currentStudent).toEqual(expectedStudent);
      });
  });

  it('should set current student', () => {
    let expectedStudent = new Student('john', 'cena');

    service.setCurrentStudent(expectedStudent);

    store.select(CURRENT_STUDENT)
      .subscribe(currentStudent => {
        expect(currentStudent).toEqual(expectedStudent);
      });
  });
});
