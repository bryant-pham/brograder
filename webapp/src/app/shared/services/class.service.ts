import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../reducers/app.store';
import { CURRENT_CLASS, SET_CURRENT_CLASS } from '../reducers';

@Injectable()
export class ClassService {
  constructor(private store: Store<AppStore>) {
  }

  getCurrentClass(): Observable<string> {
    return this.store.select(CURRENT_CLASS);
  }

  setCurrentClass(currentClass: string): void {
    this.store.dispatch({type: SET_CURRENT_CLASS, payload: currentClass});
  }
}
