import { combineReducers } from "redux";

import ACTION_TYPES from "../../actions/types";

const byId = (state = {}, action) => {
  switch (action.type) {
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
    case ACTION_TYPES.RECEIVE_TODOS:
      // we don't add them remotely received ones
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
});
