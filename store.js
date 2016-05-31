import * as Redux from 'redux';
import * as reducers from './reducers';

const promiseMiddleware = store => next => action =>
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next)
    : Promise.resolve(next(action));

export function createStore() {
  const createStore = Redux.applyMiddleware(promiseMiddleware)(Redux.createStore);
  return createStore(Redux.combineReducers(reducers));
}
