import { ActionReducer } from '@ngrx/store';

import { Class, Student } from '../models';

export const CLASSES = 'CLASSES';

export const SET_ALL_CLASSES = 'SET_ALL_CLASSES';

let initialState = [
  new Class('AM', [
    new Student('John', 'Cena', '1'),
    new Student('Novak', 'Djokovic', '2'),
    new Student('Andy', 'Murray', '3')
  ]),
  new Class('PM', [
    new Student('Jack', 'Cena', '4'),
    new Student('Mike', 'Djokovic', '5'),
    new Student('Roger', 'Gracie', '6')
  ])
];

export const classesReducer: ActionReducer<Array<Class>> =
  (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ALL_CLASSES:
      return payload;
    default:
      return state;
  }
};
