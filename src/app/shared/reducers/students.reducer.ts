import { ActionReducer } from '@ngrx/store';
import Immutable = require('immutable');

import { Student } from '../models';

export const STUDENTS = 'STUDENTS';

export const SET_STUDENTS = 'SET_STUDENTS';

let initialState = Immutable.Map<string, Student>()
  .set('1', new Student('John', 'Cena', '1'))
  .set('2', new Student('Novak', 'Djokovic', '2'))
  .set('3', new Student('Andy', 'Murray', '3'))
  .set('4', new Student('Jack', 'Cena', '4'))
  .set('5', new Student('Mike', 'Djokovic', '5'))
  .set('6', new Student('Roger', 'Gracie', '6'));

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
