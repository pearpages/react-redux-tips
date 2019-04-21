import { combineReducers } from "redux";

import ACTION_TYPES from "./filter.models";

const allIds = (state = [], action) => {
  if (action.filter !== ACTION_TYPES.SHOW_ALL) {
    return state;
  }
  switch (action.type) {
    case `RECEIVE_TODOS`:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  if (action.filter !== ACTION_TYPES.SHOW_ACTIVE) {
    return state;
  }
  switch (action.type) {
    case `RECEIVE_TODOS`:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  if (action.filter !== ACTION_TYPES.SHOW_COMPLETED) {
    return state;
  }
  switch (action.type) {
    case `RECEIVE_TODOS`:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

export default combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds
});
