import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import promise from "redux-promise";
import { createLogger } from "redux-logger";

import localTodos, * as fromTodos from "./local";
import remoteTodos from "./remote";
import visibilityFilter from "../reducers/visibility-filter";
import persistedStore from "../storage/persisted-store";
import { loadState } from "../storage/local-store-data";

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }
  middlewares.push(promise);

  const store = createStore(
    combineReducers({ localTodos, remoteTodos, visibilityFilter }),
    loadState() || persistedStore,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // autosave (needs to install lodash -lodash/throttle):
  // store.subscribe(throttle(() => {
  //   saveState({
  //     todos: store.getState().todos,
  //   });
  // }, 1000));

  return store;
};

export default configureStore;

// selectors:
export const getLocalTodos = state =>
  fromTodos.getLocalTodos(state.localTodos, state.visibilityFilter);

export const getFilter = state => state.visibilityFilter;
