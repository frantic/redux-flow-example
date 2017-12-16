// @flow

import * as Redux from 'redux';
import * as reducers from './reducers';

import type {Action} from './actions';
export type Dispatch = (action: Action | Promise<Action>) => Promise<*>;

const promiseMiddleware = store => next => action =>
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next)
    : Promise.resolve(next(action));

export function createStore() {
  const createStore = Redux.applyMiddleware(promiseMiddleware)(Redux.createStore);
  return createStore(Redux.combineReducers(reducers));
}
