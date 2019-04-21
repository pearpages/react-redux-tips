import { combineReducers } from "redux";

import ACTION_TYPES from "../../actions/types";
import todoReducer from "./todo";
import FILTER from "../filter.models";

const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
    case ACTION_TYPES.TOGGLE_TODO:
      return { ...state, [action.id]: todoReducer(state[action.id], action) };
    case ACTION_TYPES.REMOVE_TODO:
      const shallowState = { ...state };
      delete shallowState[action.id];
      return shallowState;
    default:
      return state;
  }
};

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

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export function getLocalTodos(state, filter) {
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
