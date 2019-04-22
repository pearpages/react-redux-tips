import * as api from "../api";

import ACTION_TYPES from "./remote-types";
import * as fromState from "../reducers";

const receiveTodos = (filter, response) => ({
  type: ACTION_TYPES.RECEIVE_TODOS,
  filter,
  response
});

const fetch = filter => ({
  type: ACTION_TYPES.FETCH_TODOS,
  filter
});

export const fetchTodos = filter => (dispatch, getState) => {
  if (fromState.isLoading(getState())) {
    return;
  }
  dispatch(fetch(filter));
  api
    .fetchTodos(filter)
    .then(response => dispatch(receiveTodos(filter, response)));
};
