import { ActionReducer } from '@ngrx/store';

import { Class, Student } from "../models";

export const CURRENT_CLASS = 'CURRENT_CLASS';

export const SET_CURRENT_CLASS = 'SET_CURRENT_CLASS';

let initialState = new Class([
  new Student('John', 'Cena'),
  new Student('Novak', 'Djokovic'),
  new Student('Andy', 'Murray')
]);

export const currentClassReducer: ActionReducer<Class> = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_CLASS:
      return payload;
    default:
      return state;
  }
};
