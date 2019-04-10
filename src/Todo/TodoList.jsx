import React, { Component } from "react";
import { createStore, combineReducers } from "redux";

import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoItems from "./TodoItems";
import todos from "../examples/src/todos";
import visibilityFilter from "../examples/src/visibility-filter";

const store = createStore(combineReducers({ todos, visibilityFilter }));
let nextTodoId = 0;

function Todos({ todos, visibilityFilter }) {
  const addTodo = value => store.dispatch({ type: "ADD_TODO", text: value, id: ++nextTodoId });
  const toggleTodo = id => store.dispatch({ type: "TOGGLE_TODO", id });

  return (
    <>
      <AddTodo handleClick={addTodo} />
      <TodoItems
        todos={getVisibleTodos(todos, visibilityFilter)}
        handleToggle={toggleTodo}
      />
      <Footer
        store={store}
        visibilityFilter={visibilityFilter}
      />
    </>
  );
}

export default class Container extends Component {
  state = store.getState();

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ ...store.getState() });
    });
  }

  render() {
    return <Todos {...this.state} />;
  }
}

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case "SHOW_ACTIVE":
      return todos.filter(todo => todo.completed === false);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed === true);
    case "SHOW_ALL":
    default:
      return todos;
  }
}
