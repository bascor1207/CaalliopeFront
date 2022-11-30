import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { authReducer as auth } from './reducers';
import { authInitialize } from './actions';
import * as services from '../services';

export const initStore = () => {
  const middlewares = composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(services),
      createLogger({ collapsed: true, level: 'warn' })
    )
  );

  const reducers = combineReducers({ auth });

  const store = createStore(reducers, {}, middlewares);
  store.dispatch(authInitialize());
  return store;
}
