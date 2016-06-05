import { ActionReducer } from '@ngrx/store';

import { Class, Student } from "../models";

export const ALL_CLASSES = 'ALL_CLASSES';

export const SET_ALL_CLASSES = 'SET_ALL_CLASSES';

let initialState = [
  new Class('AM', [
    new Student('John', 'Cena'),
    new Student('Novak', 'Djokovic'),
    new Student('Andy', 'Murray')
  ]),
  new Class('PM', [
    new Student('Jack', 'Cena'),
    new Student('Mike', 'Djokovic'),
    new Student('Roger', 'Gracie')
  ])
];

export const allClassesReducer: ActionReducer<Array<Class>> = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ALL_CLASSES:
      return payload;
    default:
      return state;
  }
};
