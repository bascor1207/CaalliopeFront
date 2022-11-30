/* eslint-disable default-case */
import produce from 'immer';

import { actions } from '../actions';

const initialState = {
  loggedUser: undefined,
  authError: undefined
};

export const authReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actions.AUTH_INITIALIZE:
      draft.loggedUser = action.payload.user;
      break;
    case actions.AUTH_DISCONNECT:
      draft.loggedUser = undefined;
      draft.authError = undefined;
      break;
    case actions.AUTH_CONNECT_SUCCESS:
      draft.loggedUser = action.payload.user;
      draft.authError = undefined;
      break;
    case actions.AUTH_CONNECT_ERROR:
      draft.authError = action.payload.error || 'Authentication error';
      draft.loggedUser = undefined;
      break;
  }
});
