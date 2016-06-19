import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../reducers/app.store';
import { Teacher } from '../models';
import { TEACHER, SET_TEACHER } from '../reducers';

@Injectable()
export class TeacherService {
  constructor(private store: Store<AppStore>) {
  }

  getTeacher(): Observable<Teacher> {
    return this.store.select(TEACHER);
  }

  setTeacher(teacher: Teacher): void {
    this.store.dispatch({type: SET_TEACHER, payload: teacher});
  }
}
