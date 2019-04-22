import { combineReducers } from "redux";

import createList from "./createList";
import FILTER_TYPES from "../filter.models";
import * as fromList from "./createList";

export default combineReducers({
  [FILTER_TYPES.ALL]: createList(FILTER_TYPES.ALL),
  [FILTER_TYPES.ACTIVE]: createList(FILTER_TYPES.ACTIVE),
  [FILTER_TYPES.COMPLETED]: createList(FILTER_TYPES.COMPLETED)
});

export const getIds = (state, filter) => fromList.getIds(state[filter]);

export const isFetching = (state, filter) =>
  fromList.getIsFetching(state[filter]);
