import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../reducers/app.store';
import { CURRENT_STUDENT, SET_CURRENT_STUDENT } from '../reducers';
import { Student, Assignment, GradedAssignment } from '../models';

@Injectable()
export class StudentService {
  constructor(private store: Store<AppStore>) {
  }

  getCurrentStudent(): Observable<Student> {
    return this.store.select(CURRENT_STUDENT);
  }

  setCurrentStudent(student: Student): void {
    this.store.dispatch({type: SET_CURRENT_STUDENT, payload: student});
  }

  recordGradeForStudent(assignment: Assignment): void {
    let gradedAssignment = new GradedAssignment(assignment);
    this.getCurrentStudent().first().subscribe(student => {
      student.addGradedAssignment(gradedAssignment);
      this.setCurrentStudent(student);
    });
  }
}
