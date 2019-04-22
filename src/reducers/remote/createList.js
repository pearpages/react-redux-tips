import ACTION_TYPES from "../../actions/types";

export default filter => {
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTION_TYPES.RECEIVE_TODOS:
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };
};

export const getIds = state => state;
