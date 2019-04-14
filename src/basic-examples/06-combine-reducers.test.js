import { combineReducers, createStore } from "redux";
import FILTER from "./reducers/filter.models";

const todo = (state, action) => {
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
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

// HERE THE MAGIC!!!
const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

const store = createStore(todoApp);

it("Initial state:", () => {
  expect(store.getState()).toEqual({
    todos: [],
    visibilityFilter: FILTER.SHOW_ALL
  });
});

it("should add a todo", () => {
  store.dispatch({
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  });
  store.dispatch({
    type: "ADD_TODO",
    id: 1,
    text: "Go shopping"
  });
  store.dispatch({
    type: "TOGGLE_TODO",
    id: 0
  });
  expect(store.getState()).toEqual({
    todos: [
      { completed: true, id: 0, text: "Learn Redux" },
      { completed: false, id: 1, text: "Go shopping" }
    ],
    visibilityFilter: FILTER.SHOW_ALL
  });
});

it("should set the visibility filter", () => {
  store.dispatch({
    type: "SET_VISIBILITY_FILTER",
    filter: FILTER.SHOW_COMPLETED
  });
  expect(store.getState()).toEqual({
    todos: [
      { completed: true, id: 0, text: "Learn Redux" },
      { completed: false, id: 1, text: "Go shopping" }
    ],
    visibilityFilter: FILTER.SHOW_COMPLETED
  });
});
