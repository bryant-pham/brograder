import {
  beforeEachProviders,
  describe,
  inject,
  it,
  beforeEach
} from '@angular/core/testing';
import { provideStore, Store } from '@ngrx/store';

import { ClassService } from './class.service';
import { REDUCERS, SET_CURRENT_CLASS, CURRENT_CLASS } from '../reducers/index';
import { AppStore } from '../reducers/app.store';
import { Class } from '../models';
import {SET_ALL_CLASSES} from "../reducers/classes.reducer";

describe('ClassService', () => {
  beforeEachProviders(() => [
    ClassService,
    provideStore(REDUCERS)
  ]);

  let service: ClassService;
  let store: Store<AppStore>;

  beforeEach(inject([ClassService, Store], (serv, sto) => {
    service = serv;
    store = sto;
  }));

  it('should get current class', () => {
    let expectedClass = Class.Builder.build('class');
    store.dispatch({type: SET_CURRENT_CLASS, payload: expectedClass});

    service.getCurrentClass()
      .subscribe(currentClass => {
        expect(currentClass).toEqual(expectedClass);
      });
  });

  it('should set current class', () => {
    let expectedClass = Class.Builder.build('class');

    service.setCurrentClass(expectedClass);

    store.select(CURRENT_CLASS)
      .subscribe(currentClass => {
        expect(currentClass).toEqual(expectedClass);
      });
  });

  it('should get all classes', () => {
    let expectedClasses = [Class.Builder.build('class')];
    store.dispatch({type: SET_ALL_CLASSES, payload: expectedClasses});

    service.getAllClasses()
      .subscribe(classes => {
        expect(classes).toEqual(expectedClasses);
      });
  });
});
