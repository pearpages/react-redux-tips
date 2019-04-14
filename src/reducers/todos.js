import { combineReducers } from "redux";
import { v4 } from "node-uuid";
import FILTER from "../reducers/filter.models";

const todo = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
      return { ...state, [action.id]: todo(state[action.id], action) };
    case "REMOVE_TODO":
      const shallowState = { ...state };
      delete shallowState[action.id];
      return shallowState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    case "REMOVE_TODO":
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

export const add = text => ({
  type: "ADD_TODO",
  text,
  id: v4()
});
export const toggle = id => ({
  type: "TOGGLE_TODO",
  id
});
export const removeItem = id => ({
  type: "REMOVE_TODO",
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
