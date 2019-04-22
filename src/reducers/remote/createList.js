import REMOTE_TYPES from "../../actions/remote-types";
import { combineReducers } from "redux";

export default filter => {
  const ids = filter => {
    return (state = [], action) => {
      if (action.filter !== filter) {
        return state;
      }
      switch (action.type) {
        case REMOTE_TYPES.FETCH_TODOS_SUCCESS:
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
      case REMOTE_TYPES.FETCH_TODOS_SUCCESS:
      case REMOTE_TYPES.FETCH_TODOS_FAILURE:
        return false;
      case REMOTE_TYPES.FETCH_TODOS:
        return true;
      default:
        return state;
    }
  };

  const error = filter => (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case REMOTE_TYPES.FETCH_TODOS_SUCCESS:
      case REMOTE_TYPES.FETCH_TODOS:
        return null;
      case REMOTE_TYPES.FETCH_TODOS_FAILURE:
        return action.error;
      default:
        return state;
    }
  };

  return combineReducers({
    ids: ids(filter),
    isFetching: isFetching(filter),
    error: error(filter)
  });
};

export const getIds = state => state.ids;

export const getIsFetching = state => state.isFetching;

export const getError = state => state.error;
