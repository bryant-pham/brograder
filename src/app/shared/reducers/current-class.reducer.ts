import { ActionReducer } from '@ngrx/store';

import { Class } from '../models';

export const CURRENT_CLASS = 'CURRENT_CLASS';

export const SET_CURRENT_CLASS = 'SET_CURRENT_CLASS';

export const currentClassReducer: ActionReducer<Class> = (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_CLASS:
      return payload;
    default:
      return state;
  }
};
