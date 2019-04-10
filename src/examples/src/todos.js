const todo = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
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

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      const lastId = getLastId(state);
      action.id = lastId + 1;
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export const add = text => ({
  type: "ADD_TODO",
  text
});
export const toggle = id => ({
  type: "TOGGLE_TODO",
  id
});

export default todos;

function getLastId(todos = []) {
  return todos.reduce(
    (current, prev) => (current >= prev ? current.id : prev.id),
    0
  );
}