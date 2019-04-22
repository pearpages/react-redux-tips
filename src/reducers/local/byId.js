import todoReducer from "./todo";
import ACTION_TYPES from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
    case ACTION_TYPES.TOGGLE_TODO:
      return { ...state, [action.id]: todoReducer(state[action.id], action) };
    case ACTION_TYPES.REMOVE_TODO:
      const shallowState = { ...state };
      delete shallowState[action.id];
      return shallowState;
    default:
      return state;
  }
};
