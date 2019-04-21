import ACTION_TYPES from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case ACTION_TYPES.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};
