import React, { Component } from "react";

import { createStore, combineReducers } from "redux";
import todos from "../examples/src/todos";

const store = createStore(combineReducers({ todos }));
let nextTodoId = 0;

function Todos(props) {
  let input;
  const handleClick = () => {
    store.dispatch({ type: "ADD_TODO", text: input.value, id: ++nextTodoId });
    input.value = "";
  };
  const handleToggle = id => store.dispatch({ type: "TOGGLE_TODO", id });

  return (
    <div>
      <input type="text" ref={node => (input = node)} />
      <button onClick={handleClick}>Add item</button>
      <ul>
        {props.todos.map(todo => (
          <li
            onClick={() => handleToggle(todo.id)}
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default class Container extends Component {
  state = { todos: store.getState().todos };

  componentDidMount() {
    store.subscribe(() => this.setState({ todos: store.getState().todos }));
  }

  render() {
    return <Todos todos={this.state.todos} />;
  }
}
