import ACTION_TYPES from "./remote-types";
import * as fromState from "../reducers";
import * as api from "../api";

export const fetchTodos = filter => (dispatch, getState) => {
  if (fromState.isLoading(getState())) {
    return;
  }

  const fetchSuccess = (filter, response) => ({
    type: ACTION_TYPES.FETCH_TODOS_SUCCESS,
    filter,
    response
  });

  const fetch = filter => ({
    type: ACTION_TYPES.FETCH_TODOS,
    filter
  });

  const fetchFailure = (error, filter) => ({
    type: ACTION_TYPES.FETCH_TODOS_FAILURE,
    filter,
    error
  });

  dispatch(fetch(filter));
  api
    .fetchTodos(filter)
    .then(
      response => dispatch(fetchSuccess(filter, response)),
      error =>
        dispatch(fetchFailure(error.message || "Something went wrong", filter))
    );
};

export const addRemoteTodo = text => dispatch => {
  dispatch({ type: ACTION_TYPES.ADD_TODO, text });
  api.addTodo(text).then(response => ({
    type: ACTION_TYPES.ADD_TODO_SUCCESS,
    response
  }));
};
