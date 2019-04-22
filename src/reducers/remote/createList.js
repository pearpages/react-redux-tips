import REMOTE_TYPES from "../../actions/remote-types";
import { combineReducers } from "redux";

const ids = filter => {
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case REMOTE_TYPES.RECEIVE_TODOS:
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };
};

const isFetching = filter => (state = false, action) => {
  if (action.filter !== filter) {
    return state;
  }
  switch (action.type) {
    case REMOTE_TYPES.RECEIVE_TODOS:
      return false;
    case REMOTE_TYPES.FETCH_TODOS:
      return true;
    default:
      return state;
  }
};

export default filter =>
  combineReducers({
    ids: ids(filter),
    isFetching: isFetching(filter)
  });

export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;
