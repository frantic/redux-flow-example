// @flow

import type {Action} from './actions';

type State = {
  isLoggedIn: boolean;
  userName: string;
};

const initialState = {
  isLoggedIn: false,
  userName: 'unknown'
};

export function user(state: State = initialState, action: Object): State {
  if (action.type === 'LOGGED_IN') {
    return {
      isLoggedIn: true,
      userName: action.userName
    };
  }

  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }

  return state;
}
