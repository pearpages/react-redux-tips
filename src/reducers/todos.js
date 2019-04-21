import { combineReducers } from "redux";

import ACTION_TYPES from "../actions/types";
import todo from "./todo";
import FILTER from "../reducers/filter.models";
import idsByFilter from "./idsByFilter";

const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
    case ACTION_TYPES.TOGGLE_TODO:
      return { ...state, [action.id]: todo(state[action.id], action) };
    case ACTION_TYPES.REMOVE_TODO:
      const shallowState = { ...state };
      delete shallowState[action.id];
      return shallowState;
    case ACTION_TYPES.RECEIVE_TODOS:
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
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
    case ACTION_TYPES.RECEIVE_TODOS:
      // we don't add them remotely received ones
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds, // local ids
  idsByFilter
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
