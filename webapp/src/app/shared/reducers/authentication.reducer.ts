import { ActionReducer, Action } from '@ngrx/store';

export const AUTHENTICATION = 'AUTHENTICATION';

export const AUTHENTICATED = 'AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';

export const authenticationReducer: ActionReducer<boolean> = (state = false, action: Action) => {
    switch (action.type) {
      case AUTHENTICATED:
        return true;
      case UNAUTHENTICATED:
        return false;
      default:
        return state;
    }
};
