import { createStore, combineReducers } from "redux";

import todos, * as fromTodos from "../reducers/todos";
import visibilityFilter from "../reducers/visibility-filter";
import persistedStore from "../storage/persisted-store";
import { loadState } from "../storage/local-store-data";

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;
  return action => {
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

const configureStore = () => {
  const reactTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(
    combineReducers({ todos, visibilityFilter }),
    loadState() || persistedStore,
    reactTools
  );

  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.dispatch = addPromiseSupportToDispatch(store);

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
export const getVisibleTodos = state =>
  fromTodos.getVisibleTodos(state.todos, state.visibilityFilter);

export const getFilter = state => state.visibilityFilter;
