import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import "@babel/polyfill";

import localTodos, * as fromLocalTodos from "./local";
import remoteTodos, * as fromRemoteTodos from "./remote";
import visibilityFilter from "../reducers/visibility-filter";
import persistedStore from "../storage/persisted-store";
import { loadState } from "../storage/local-store-data";

const USE_LOGGER = false;

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [promise, thunk];

  if (process.env.NODE_ENV !== "production" && USE_LOGGER) {
    middlewares.push(createLogger());
  }

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
  fromLocalTodos.getLocalTodos(state.localTodos, state.visibilityFilter);

export const getRemoteTodos = state =>
  fromRemoteTodos.getRemoteTodos(state.remoteTodos, state.visibilityFilter);

export const getFilter = state => state.visibilityFilter; // TODO: fix. we are not supposed to know about the implementation of the inner state

export const isLoading = state =>
  fromRemoteTodos.isFetching(state.remoteTodos, state.visibilityFilter);

export const getError = state =>
  fromRemoteTodos.getError(state.remoteTodos, state.visibilityFilter);
