import { ActionReducer } from '@ngrx/store';
import Immutable = require('immutable');

import { Student } from '../models';

export const STUDENTS = 'STUDENTS';

export const SET_STUDENTS = 'SET_STUDENTS';

let john = new Student.Builder()
  .withId('1')
  .withFirstName('John')
  .withFirstName('Cena')
  .withClass('AM')
  .withTeacherId('1')
  .build();
let andy = new Student.Builder()
  .withId('2')
  .withFirstName('Andy')
  .withFirstName('Murray')
  .withClass('PM')
  .withTeacherId('1')
  .build();
let initialState = Immutable.Map<string, Student>()
  .set('1', john)
  .set('2', andy);

export const studentsReducer: ActionReducer<Immutable.Map<string, Student>> = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_STUDENTS:
      payload.forEach((student: Student) => {
        state = state.set(student.id, student);
      });
      return state;
    default:
      return state;
  }
};
