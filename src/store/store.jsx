import { createStore, combineReducers } from "redux";

import todos from "../reducers/todos";
import visibilityFilter from "../reducers/visibility-filter";
import persistedStore from "./persisted-store";
import { loadState } from "./local-store-data";

export default createStore(
  combineReducers({ todos, visibilityFilter }),
  loadState() || persistedStore
);
