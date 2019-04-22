import { combineReducers } from "redux";

import byId, * as fromById from "./byId";
import listByFilter, * as fromList from "./listByFilter";

export default combineReducers({
  byId,
  listByFilter
});

export const getRemoteTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter, filter);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const isFetching = (state, filter) =>
  fromList.isFetching(state.listByFilter, filter);

export const getError = (state, filter) =>
  fromList.getError(state.listByFilter, filter);
