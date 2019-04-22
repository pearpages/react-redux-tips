import { v4 } from "node-uuid";

import ACTION_TYPES from "./local-types";

export const add = text => ({
  type: ACTION_TYPES.ADD_TODO,
  text,
  id: v4()
});
export const toggle = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  id
});
export const removeItem = id => ({
  type: ACTION_TYPES.REMOVE_TODO,
  id
});
