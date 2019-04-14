import { createStore, combineReducers } from "redux";

import todos, * as fromTodos from "../reducers/todos";
import visibilityFilter from "../reducers/visibility-filter";
import persistedStore from "../storage/persisted-store";
import { loadState } from "../storage/local-store-data";

export default createStore(
  combineReducers({ todos, visibilityFilter }),
  loadState() || persistedStore
);

// selectors:
export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);