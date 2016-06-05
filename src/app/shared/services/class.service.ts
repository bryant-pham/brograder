import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../reducers/app.store';
import { CURRENT_CLASS } from '../reducers';
import { Class } from '../models';

@Injectable()
export class ClassService {
  constructor(private store: Store<AppStore>) {
  }

  getCurrentClass(): Observable<Class> {
    return this.store.select(CURRENT_CLASS);
  }
}
