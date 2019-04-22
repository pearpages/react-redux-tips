import { combineReducers } from "redux";

import byId from "./byId";
import ACTION_TYPES from "../../actions/types";
import FILTER from "../filter.models";

const allIds = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, action.id];
    case ACTION_TYPES.REMOVE_TODO:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
});

export function getLocalTodos(state, filter) {
  const getAllTodos = state => state.allIds.map(id => state.byId[id]);
  const allTodos = getAllTodos(state);
  switch (filter) {
    case FILTER.SHOW_ACTIVE:
      return allTodos.filter(todo => todo.completed === false);
    case FILTER.SHOW_COMPLETED:
      return allTodos.filter(todo => todo.completed === true);
    case FILTER.SHOW_ALL:
    default:
      return allTodos;
  }
}

export function getVisibleTodos(state, filter) {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
}
