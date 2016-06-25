import {
  beforeEachProviders,
  describe,
  inject,
  it,
  beforeEach
} from '@angular/core/testing';
import { provideStore, Store } from '@ngrx/store';

import { ClassService } from './class.service';
import { AppStore } from '../reducers/app.store';
import {
  REDUCERS,
  SET_CURRENT_CLASS,
  CURRENT_CLASS
} from '../reducers/index';

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
    let expectedClass = 'AM';
    store.dispatch({type: SET_CURRENT_CLASS, payload: expectedClass});

    service.getCurrentClass()
      .subscribe(currentClass => {
        expect(currentClass).toEqual(expectedClass);
      });
  });

  it('should set current class', () => {
    let expectedClass = 'AM';

    service.setCurrentClass(expectedClass);

    store.select(CURRENT_CLASS)
      .subscribe(currentClass => {
        expect(currentClass).toEqual(expectedClass);
      });
  });
});
