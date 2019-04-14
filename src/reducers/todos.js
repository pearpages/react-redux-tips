import { combineReducers } from "redux";
import { v4 } from "node-uuid";

import todo from "./todo";
import FILTER from "../reducers/filter.models";

export const ACTION_TYPES = {
  ADD_TODO: "[TODOS] Add Todo",
  TOGGLE_TODO: "[TODOS] Toggle Todo",
  REMOVE_TODO: "[TODOS] Remove Todo"
};
Object.freeze(ACTION_TYPES);

const byId = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
    case ACTION_TYPES.TOGGLE_TODO:
      return { ...state, [action.id]: todo(state[action.id], action) };
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

export const add = text => ({
  type: ACTION_TYPES.ADD_TODO,
  text,
  id: v4()
});
export const toggle = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id
});
export const removeItem = id => ({
  type: ACTION_TYPES.REMOVE_TODO,
  id
});

export default combineReducers({
  byId,
  allIds
});

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export function getVisibleTodos(state, filter) {
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
