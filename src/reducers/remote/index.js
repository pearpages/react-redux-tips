import { combineReducers } from "redux";

import byId from "./byId";
import listByFilter from "./listByFilter";
import * as fromList from "./createList";
import * as fromById from "./byId";

export default combineReducers({
  byId,
  listByFilter
});

export const getRemoteTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
