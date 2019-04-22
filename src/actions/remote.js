import * as api from "../api";

import ACTION_TYPES from "./remote-types";

export const receiveTodos = (filter, response) => ({
  type: ACTION_TYPES.RECEIVE_TODOS,
  filter,
  response
});

export const fetchTodos = filter => ({
  type: ACTION_TYPES.FETCH_TODOS,
  filter
});

export const fetch = filter =>
  api.fetchTodos(filter).then(response => receiveTodos(filter, response));
