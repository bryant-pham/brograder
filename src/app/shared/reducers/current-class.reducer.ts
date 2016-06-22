import { ActionReducer } from '@ngrx/store';

export const CURRENT_CLASS = 'CURRENT_CLASS';

export const SET_CURRENT_CLASS = 'SET_CURRENT_CLASS';

export const currentClassReducer: ActionReducer<string> = (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_CLASS:
      return payload;
    default:
      return state;
  }
};
