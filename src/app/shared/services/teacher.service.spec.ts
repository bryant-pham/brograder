import {
  beforeEachProviders,
  describe,
  inject,
  it,
  beforeEach
} from '@angular/core/testing';
import { provideStore, Store } from '@ngrx/store';

import { TeacherService } from './teacher.service';
import { AppStore } from '../reducers/app.store';
import { Teacher } from '../models';
import {
  REDUCERS,
  SET_TEACHER,
  TEACHER
} from '../reducers/index';

describe('TeacherService', () => {
  beforeEachProviders(() => [
    TeacherService,
    provideStore(REDUCERS)
  ]);

  let service: TeacherService;
  let store: Store<AppStore>;

  beforeEach(inject([TeacherService, Store], (serv, sto) => {
    service = serv;
    store = sto;
  }));

  it('should get teacher', () => {
    let expectedTeacher = new Teacher.Builder().build();
    store.dispatch({type: SET_TEACHER, payload: expectedTeacher});

    service.getTeacher().subscribe(teacher => {
      expect(teacher).toEqual(expectedTeacher);
    });
  });

  it('should set teacher', () => {
    let expectedTeacher = new Teacher.Builder().build();

    service.setTeacher(expectedTeacher);

    store.select(TEACHER).subscribe(teacher => {
      expect(teacher).toEqual(expectedTeacher);
    });
  });
});
