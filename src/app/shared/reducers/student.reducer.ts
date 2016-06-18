import { ActionReducer } from '@ngrx/store';

import { Student } from '../models';

export const STUDENTS = 'STUDENTS';

export const SET_STUDENTS = 'SET_STUDENTS';

let initialState = [
  new Student('John', 'Cena', '1'),
  new Student('Novak', 'Djokovic', '2'),
  new Student('Andy', 'Murray', '3'),
  new Student('Jack', 'Cena', '4'),
  new Student('Mike', 'Djokovic', '5'),
  new Student('Roger', 'Gracie', '6')
];

export const studentsReducer: ActionReducer<Array<Student>> = (state, {type, payload}) => {
  switch (type) {
    case SET_STUDENTS:
      return payload;
    default:
      return state;
  }
};
